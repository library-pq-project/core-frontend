export interface Course {
    id: number;
    code: string;
    slug: string;
    title: string;
    description: string;
    level: string;
    semester: string;
    active_compact_version: number | null;
}

export interface Assessment {
    id: number;
    slug: string;
    title_label: string;
    course_id: number;
    academic_session_id: number;
    semester_id: number;
    year_label: string;
    assessment_type: string;
    question_format: string;
    source_type: 'actual' | 'ai_generated';
    created_by_user_id: number | null;
    default_duration_minutes: number;
    total_available_questions: number;
}