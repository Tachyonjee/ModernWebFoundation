#!/usr/bin/env python3
"""
Start the Flask backend server for Tachyon Academy
Run this file to start the enquiry form backend
"""

import sys
import os

# Add the flask_backend directory to Python path
flask_backend_path = os.path.join(os.path.dirname(__file__), 'flask_backend')
sys.path.insert(0, flask_backend_path)

try:
    from main import create_app
except ImportError as e:
    print(f"Error importing Flask app: {e}")
    print(f"Current path: {os.getcwd()}")
    print(f"Flask backend path: {flask_backend_path}")
    sys.exit(1)

if __name__ == '__main__':
    app = create_app()
    
    # Run on port 5001 to avoid conflict with existing Express server
    port = int(os.environ.get('FLASK_PORT', 5001))
    print(f"🚀 Starting Tachyon Academy Flask Backend on port {port}")
    print(f"📋 Admin Dashboard: http://localhost:{port}/admin")
    print(f"📝 Sample Form: http://localhost:{port}/")
    print(f"🏥 Health Check: http://localhost:{port}/health")
    
    app.run(host='0.0.0.0', port=port, debug=True)