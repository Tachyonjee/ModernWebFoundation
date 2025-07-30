"""
Database initialization and connection handling for Tachyon Academy
SQLite database for storing enquiries and future user management
"""

import sqlite3
import os
from datetime import datetime
from typing import List, Dict, Optional

DATABASE_FILE = 'enquiries.db'

def get_db_connection():
    """Get database connection with row factory for dict-like access"""
    conn = sqlite3.connect(DATABASE_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def init_database():
    """Initialize database tables on startup"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create enquiries table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            message TEXT,
            segment TEXT NOT NULL DEFAULT 'General Enquiry',
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'New'
        )
    ''')
    
    # Future tables for scalability - commented out for now
    # Users table for admin authentication (future enhancement)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'admin',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT 1
        )
    ''')
    
    # Course segments for dynamic form generation (future enhancement)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS course_segments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL,
            description TEXT,
            is_active BOOLEAN DEFAULT 1
        )
    ''')
    
    # Insert default course segments
    default_segments = [
        ('General Enquiry', 'General information and queries'),
        ('JEE', 'Joint Entrance Examination preparation'),
        ('NEET', 'National Eligibility cum Entrance Test preparation'),
        ('Foundation', 'Foundation courses for 8th-10th students'),
        ('Enthuse', '11th standard comprehensive program'),
        ('Aspire', '12th standard intensive program'),
        ('Rank Booster', 'Dropper batch for JEE/NEET')
    ]
    
    for segment, description in default_segments:
        cursor.execute('''
            INSERT OR IGNORE INTO course_segments (name, description)
            VALUES (?, ?)
        ''', (segment, description))
    
    conn.commit()
    conn.close()
    print("✅ Database initialized successfully")

def save_enquiry(name: str, email: str, phone: str, message: str, segment: str = 'General Enquiry') -> int:
    """Save enquiry to database and return the ID"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO enquiries (name, email, phone, message, segment)
        VALUES (?, ?, ?, ?, ?)
    ''', (name, email, phone, message, segment))
    
    enquiry_id = cursor.lastrowid
    conn.commit()
    conn.close()
    
    return enquiry_id if enquiry_id is not None else 0

def get_all_enquiries(segment_filter: Optional[str] = None) -> List[Dict]:
    """Get all enquiries, optionally filtered by segment"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    if segment_filter and segment_filter != 'All':
        cursor.execute('''
            SELECT * FROM enquiries 
            WHERE segment = ? 
            ORDER BY timestamp DESC
        ''', (segment_filter,))
    else:
        cursor.execute('''
            SELECT * FROM enquiries 
            ORDER BY timestamp DESC
        ''')
    
    enquiries = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return enquiries

def get_enquiry_stats() -> Dict:
    """Get enquiry statistics for admin dashboard"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Total enquiries
    cursor.execute('SELECT COUNT(*) as total FROM enquiries')
    total = cursor.fetchone()['total']
    
    # Enquiries by segment
    cursor.execute('''
        SELECT segment, COUNT(*) as count 
        FROM enquiries 
        GROUP BY segment 
        ORDER BY count DESC
    ''')
    by_segment = [dict(row) for row in cursor.fetchall()]
    
    # Recent enquiries (last 7 days)
    cursor.execute('''
        SELECT COUNT(*) as recent 
        FROM enquiries 
        WHERE timestamp >= datetime('now', '-7 days')
    ''')
    recent = cursor.fetchone()['recent']
    
    conn.close()
    
    return {
        'total': total,
        'recent': recent,
        'by_segment': by_segment
    }

def get_available_segments() -> List[str]:
    """Get list of available course segments"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT name FROM course_segments 
        WHERE is_active = 1 
        ORDER BY name
    ''')
    
    segments = [row['name'] for row in cursor.fetchall()]
    conn.close()
    
    return segments