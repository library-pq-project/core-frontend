import { type Course, type Assessment, type AssessmentInfo, type StartAssessment, type QuizQuestions, type QuizResponseItem, type SubmittedAttemptStatus, type AttemptGrades } from './types';

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

export function fetchAssessmentInfo(assessmentid: number): Promise<AssessmentInfo> {
    return apiFetch<AssessmentInfo>(`/api/assessments/${assessmentid}/practice-config`)
}

interface StartAssessmentPostParams {
    desired_question_count: string
    selected_topic_ids: number[]
    selected_duration_minutes: string;
    reveal_answers_post_submit: boolean
}

export function startAssessment(assessmentid: number, data: StartAssessmentPostParams): Promise<StartAssessment> {
    const requestOptions = { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } }
    return apiFetch<StartAssessment>(`/api/assessments/${assessmentid}/practice/start`, requestOptions)
}

export function getQuizInfoFromAttempt(attemptId: string) {
    return apiFetch<QuizQuestions>(`/api/quiz-attempts/${attemptId}/questions?skip=0&limit=20`)
}

interface QuizInfo {
    quizId: string | number;
    attemptId: string;
}

export function submitAttempt(response: { responses: QuizResponseItem[] }, quizInfo: QuizInfo) {
    const requestOptions = { method: "POST", body: JSON.stringify(response), headers: { "Content-Type": "application/json" } }

    return apiFetch<SubmittedAttemptStatus>(`/api/quizzes/${quizInfo.quizId}/attempts/${quizInfo.attemptId}/submit`, requestOptions)
}

export function gradeAssessment(quizInfo: QuizInfo) {
    const requestOptions = { method: "POST" }
    return apiFetch<AttemptGrades>(`/api/quizzes/${quizInfo.quizId}/attempts/${quizInfo.attemptId}/grade`, requestOptions)
}

interface CreateCourseParams {
    code: string
    title: string,
    description: string,
    level: string
    semester: string;

}
export function createCourse(data: CreateCourseParams) {
    const requestOptions = { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } }

    return apiFetch<Course>("/api/courses", requestOptions)
}


export function uploadCourseCompact(courseId: number, file: File) {
    let title = file.name
    const form = new FormData()
    form.append("title", title)
    form.append("file", file)

    return apiFetch<any>(`/api/courses/${courseId}/compacts`, { body: form, method: "POST" })
}

interface UploadLectureNoteResponse {

    id: number;
    user_id: number;
    course_id: number;
    title: string;
    slug: string;
    original_file_name: string;
    storage_provider: string;
    storage_bucket: null;
    storage_key: string;
    file_type: string;
    file_size: number;
    text_extraction_status: string;
    relevance_score: number;
    relevance_status: string;
    relevance_reason: string;
    created_at: string;

}

export function uploadLectureNote(file: File, data: { title: string, course_id: string }) {
    const form = new FormData()
    form.append("title", data.title)
    form.append("course_id", data.course_id)

    form.append("file", file)
    return apiFetch<UploadLectureNoteResponse>(`/api/lecture-notes`, { body: form, method: "POST" })
}

interface GenerateQuestionsParams {
    quiz_title: string,
    user_prompt: string,
    course_id: string,
    requested_count: number,
    lecture_note_id: number,
    question_type: string,
    difficulty_level: string
}

export function generateQuestions(data: GenerateQuestionsParams) {
    const requestBody = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }
    return apiFetch<any>("/api/ai/question-generation", requestBody)
}