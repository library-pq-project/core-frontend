import type { Course, Assessment } from './types';

const BASE_URL: string = import.meta.env.SERVER_URL || '';

/**
 * Generic fetch wrapper that prepends the server base URL and handles errors.
 */
async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, init);
    if (!res.ok) {
        throw new Error(`API ${res.status}: ${res.statusText}`);
    }
    return res.json() as Promise<T>;
}

/** Fetch every course from the backend. */
export function fetchCourses(): Promise<Course[]> {
    return apiFetch<Course[]>('/api/courses');
}

/** Fetch a single course by its numeric ID. */
export async function fetchCourse(id: number): Promise<Course> {
    // The API doesn't have a single-course endpoint exposed in the guide,
    // so we pull the full list and filter client-side.
    const courses = await fetchCourses();
    const found = courses.find(c => c.id === id);
    if (!found) throw new Error(`Course ${id} not found`);
    return found;
}

/** Fetch assessments, optionally filtered by course. */
export function fetchAssessments(courseId?: number): Promise<Assessment[]> {
    const params = courseId != null ? `?course_id=${courseId}` : '';
    return apiFetch<Assessment[]>(`/api/assessments${params}`);
}
