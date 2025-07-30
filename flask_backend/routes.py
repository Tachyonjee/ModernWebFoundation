"""
Flask routes for Tachyon Academy enquiry system
Handles form submissions and admin dashboard
"""

from flask import Flask, request, jsonify, render_template, redirect, url_for
from db import save_enquiry, get_all_enquiries, get_enquiry_stats, get_available_segments
import re

def validate_email(email: str) -> bool:
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_phone(phone: str) -> bool:
    """Validate Indian phone number format"""
    # Remove spaces, dashes, and parentheses
    clean_phone = re.sub(r'[\s\-\(\)]', '', phone)
    
    # Check for Indian mobile number patterns
    patterns = [
        r'^(\+91|91)?[6-9]\d{9}$',  # Indian mobile numbers
        r'^0[1-9]\d{9}$'           # Landline numbers
    ]
    
    return any(re.match(pattern, clean_phone) for pattern in patterns)

def register_routes(app: Flask):
    """Register all routes for the Flask application"""
    
    @app.route('/')
    def index():
        """Home page with sample enquiry form"""
        segments = get_available_segments()
        return render_template('index.html', segments=segments)
    
    @app.route('/submit', methods=['POST'])
    def submit_enquiry():
        """Handle form submissions from React frontend and Flask forms"""
        data = {}
        try:
            # Handle both JSON (React) and form data (HTML forms)
            if request.is_json:
                data = request.get_json() or {}
            else:
                data = request.form.to_dict()
            
            # Extract and validate required fields
            name = data.get('name', '').strip()
            email = data.get('email', '').strip()
            phone = data.get('phone', '').strip()
            message = data.get('message', '').strip()
            segment = data.get('segment', 'General Enquiry').strip()
            
            # Validation
            errors = []
            
            if not name or len(name) < 2:
                errors.append('Name must be at least 2 characters long')
            
            if not email or not validate_email(email):
                errors.append('Please provide a valid email address')
            
            if not phone or not validate_phone(phone):
                errors.append('Please provide a valid Indian phone number')
            
            if errors:
                if request.is_json:
                    return jsonify({
                        'success': False,
                        'errors': errors
                    }), 400
                else:
                    return render_template('index.html', 
                                         errors=errors, 
                                         segments=get_available_segments(),
                                         form_data=data)
            
            # Save to database
            enquiry_id = save_enquiry(name, email, phone, message, segment)
            
            # Log the enquiry
            print(f"✅ New enquiry saved: ID={enquiry_id}, Segment={segment}, Name={name}")
            
            # Return appropriate response
            if request.is_json:
                return jsonify({
                    'success': True,
                    'message': 'Thank you! Your enquiry has been submitted successfully.',
                    'enquiry_id': enquiry_id
                }), 200
            else:
                return redirect(url_for('thankyou', enquiry_id=enquiry_id))
                
        except Exception as e:
            print(f"❌ Error processing enquiry: {str(e)}")
            
            if request.is_json:
                return jsonify({
                    'success': False,
                    'error': 'An error occurred while processing your enquiry. Please try again.'
                }), 500
            else:
                return render_template('index.html', 
                                     errors=['An error occurred. Please try again.'],
                                     segments=get_available_segments(),
                                     form_data=data)
    
    @app.route('/thankyou')
    def thankyou():
        """Thank you page after successful form submission"""
        enquiry_id = request.args.get('enquiry_id', '')
        return render_template('thankyou.html', enquiry_id=enquiry_id)
    
    @app.route('/admin')
    def admin_dashboard():
        """Admin dashboard to view all enquiries"""
        # Get filter parameter
        segment_filter = request.args.get('segment', 'All')
        
        # Get data
        enquiries = get_all_enquiries(segment_filter)
        stats = get_enquiry_stats()
        segments = ['All'] + get_available_segments()
        
        return render_template('admin.html', 
                             enquiries=enquiries,
                             stats=stats,
                             segments=segments,
                             current_filter=segment_filter)
    
    @app.route('/api/enquiries')
    def api_enquiries():
        """API endpoint to get enquiries (for React frontend)"""
        segment_filter = request.args.get('segment')
        enquiries = get_all_enquiries(segment_filter)
        return jsonify({
            'success': True,
            'enquiries': enquiries
        })
    
    @app.route('/api/stats')
    def api_stats():
        """API endpoint to get enquiry statistics"""
        stats = get_enquiry_stats()
        return jsonify({
            'success': True,
            'stats': stats
        })
    
    @app.route('/health')
    def health_check():
        """Health check endpoint"""
        return jsonify({
            'status': 'healthy',
            'service': 'Tachyon Academy Enquiry System',
            'version': '1.0.0'
        })
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        if request.path.startswith('/api/'):
            return jsonify({'error': 'API endpoint not found'}), 404
        return render_template('404.html'), 404
    
    @app.errorhandler(500)
    def internal_error(error):
        if request.path.startswith('/api/'):
            return jsonify({'error': 'Internal server error'}), 500
        return render_template('500.html'), 500