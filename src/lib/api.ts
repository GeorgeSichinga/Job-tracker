/**
 * API client for JobWatch backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description?: string;
  url: string;
  source: string;
  found_at?: string;
  applied: boolean;
}

export interface Stats {
  total: number;
  malawi: number;
  applied: number;
  remote: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Jobs API
export async function getJobs(options?: {
  limit?: number;
  search?: string;
  applied?: boolean;
}): Promise<Job[]> {
  try {
    const params = new URLSearchParams();
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.search) params.append('search', options.search);
    if (options?.applied !== undefined) {
      params.append('applied', options.applied ? 'true' : 'false');
    }

    const response = await fetch(`${API_BASE_URL}/api/jobs?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data.success) {
      return data.jobs || [];
    }
    console.error('Failed to fetch jobs:', data.error);
    return [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

// Stats API
export async function getStats(): Promise<Stats | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data.total !== undefined) {
      return {
        total: data.total,
        malawi: data.malawi || 0,
        applied: data.applied || 0,
        remote: data.remote || 0,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching stats:', error);
    return null;
  }
}

// Mark job as applied
export async function markJobApplied(
  jobId: number,
  applied: boolean,
  options?: {
    sendEmail?: boolean;
    userEmail?: string;
  }
): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/jobs/${jobId}/applied`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        applied,
        sendEmail: options?.sendEmail || false,
        userEmail: options?.userEmail || '',
      }),
    });

    const data = await response.json();
    return data.success || false;
  } catch (error) {
    console.error('Error marking job as applied:', error);
    return false;
  }
}
