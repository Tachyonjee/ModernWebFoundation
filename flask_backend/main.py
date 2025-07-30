#!/usr/bin/env python3
"""
Tachyon Academy - Flask Backend for Enquiry & Admission Forms
Entry point for the Flask application
"""

from flask import Flask
from flask_cors import CORS
import os
from db import init_database
from routes import register_routes

def create_app():
    """Create and configure the Flask application"""
    app = Flask(__name__)
    
    # Enable CORS for React frontend
    CORS(app, origins=["http://localhost:5000", "http://localhost:3000"])
    
    # Configuration
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-key-tachyon-academy')
    app.config['DATABASE'] = 'enquiries.db'
    
    # Initialize database
    init_database()
    
    # Register routes
    register_routes(app)
    
    return app

if __name__ == '__main__':
    app = create_app()
    
    # Run on port 5001 to avoid conflict with existing Express server
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=True)