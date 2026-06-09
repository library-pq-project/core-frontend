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

export interface AssessmentInfo {
    assessment: Assessment;
    selectable_topics: Selectabletopic[];
    constraints: Constraints;
}

interface Constraints {
    min_questions: number;
    max_questions: number;
    min_duration_minutes: number;
    max_duration_minutes: number;
}

interface Selectabletopic {
    id: number;
    name: string;
    slug: string;
}

export interface StartAssessment {
    quiz: Quiz;
    attempt: Attempt;
    available_question_count: number;
}

interface Attempt {
    id: number;
    quiz_id: number;
    user_id: number;
    attempt_number: number;
    status: string;
    started_at: string;
    expected_end_at: string;
    submitted_at: null;
    duration_used_seconds: null;
    selected_duration_minutes: number;
    graded_at: null;
}

interface Quiz {
    id: number;
    title: string;
    slug: string;
    course_id: number;
    assessment_id: number;
    topic_id: number;
    academic_session_id: number;
    semester_id: number;
    question_source_mode: string;
    question_type_mode: string;
    total_questions: number;
    max_attempts: number;
    reveal_answers_post_submit: boolean;
    status: string;
    started_at: string;
    submitted_at: null;
    created_at: string;
}

export type QuizQuestions = Question[]

interface Question {
    quiz_question_id: number;
    question_text: string;
    question_type: string;
    sequence_number: number;
    options: Option[];
    selected_quiz_question_option_id: null;
    answer_text: null;
}


interface Option {
    id: number;
    option_text_snapshot: string;
    display_order: number;
}

export interface QuizResponseItem {
  quiz_question_id: number;
  selected_quiz_question_option_id: number | null; 
  answer_text: string | null;
}