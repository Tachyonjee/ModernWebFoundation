/**
 * API client for Tachyon Academy Flask backend
 * Handles enquiry form submissions and admin dashboard data
 */

const FLASK_API_BASE = 'http://localhost:5001';

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  segment: string;
}

export interface EnquiryResponse {
  success: boolean;
  message?: string;
  enquiry_id?: number;
  errors?: string[];
  error?: string;
}

export interface EnquiryRecord {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  segment: string;
  timestamp: string;
  status: string;
}

export interface EnquiryStats {
  total: number;
  recent: number;
  by_segment: Array<{
    segment: string;
    count: number;
  }>;
}

/**
 * Submit an enquiry form to the Flask backend
 */
export async function submitEnquiry(data: EnquiryFormData): Promise<EnquiryResponse> {
  try {
    const response = await fetch(`${FLASK_API_BASE}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        errors: result.errors || [result.error || 'An error occurred'],
      };
    }

    return result;
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

/**
 * Get all enquiries from the backend
 */
export async function getEnquiries(segment?: string): Promise<{
  success: boolean;
  enquiries?: EnquiryRecord[];
  error?: string;
}> {
  try {
    const params = segment ? `?segment=${encodeURIComponent(segment)}` : '';
    const response = await fetch(`${FLASK_API_BASE}/api/enquiries${params}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch enquiries');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return {
      success: false,
      error: 'Failed to fetch enquiries',
    };
  }
}

/**
 * Get enquiry statistics from the backend
 */
export async function getEnquiryStats(): Promise<{
  success: boolean;
  stats?: EnquiryStats;
  error?: string;
}> {
  try {
    const response = await fetch(`${FLASK_API_BASE}/api/stats`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      success: false,
      error: 'Failed to fetch statistics',
    };
  }
}

/**
 * Check if the Flask backend is healthy
 */
export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${FLASK_API_BASE}/health`);
    return response.ok;
  } catch (error) {
    console.error('Backend health check failed:', error);
    return false;
  }
}

/**
 * Available course segments
 */
export const COURSE_SEGMENTS = [
  'General Enquiry',
  'JEE',
  'NEET', 
  'Foundation',
  'Enthuse',
  'Aspire',
  'Rank Booster'
] as const;

export type CourseSegment = typeof COURSE_SEGMENTS[number];