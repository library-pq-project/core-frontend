# TODO: Course Assessment & AI Practice App

This todo list outlines the core features to be built for the frontend application using Svelte 5 and Tailwind CSS 4.

## Core Features

### 1. Courses & Assessments Discovery
- [ ] **Active Courses Dashboard**: Built by querying `/api/academic/me/offered-courses` and rendering dynamic Svelte 5 component cards utilizing Tailwind CSS 4 utility classes for rich aesthetics.
- [ ] **Assessment Archive per Course**: Built using dynamic client-side routing (`/course/[id]`) that fetches course tests via `/api/assessments` filtered by course ID and session.

### 2. Practice Quiz Flow (MCQ & Essay)
- [ ] **Practice Configuration Loader**: Built by fetching `/api/assessments/{id}/practice-config` to render user choices for topic selection, duration, and question count.
- [ ] **Dynamic Live Quiz Engine**: Built by starting attempts with `/api/assessments/{id}/practice/start` and maintaining quiz state through `GET /api/quizzes/{id}/in-progress-questions` and `/api/quiz-attempts/{id}/questions`.
- [ ] **Quiz Response Submission**: Built using `POST /api/quizzes/{quiz_id}/attempts/{attempt_id}/submit` to send student MCQ options and essay texts reactively.

### 3. Interactive Theory & File Upload
- [ ] **Theory Document & Image Upload**: Built using `POST /api/quiz-attempts/{attempt_id}/theory-answers/upload` with a Svelte dropzone component accepting PDF/images and transmitting via multipart form data.
- [ ] **Rich-Text Essay Editor**: Built by embedding the Quill editor wrapper in `src/pages/Question.svelte` for drafting essays with real-time word count tracking.

### 4. Grading & Diagnostic Review
- [ ] **Instant AI Grading & Topic Performance**: Built by triggering grading with `/api/quizzes/{id}/attempts/{id}/grade` and presenting score cards from `/api/quiz-attempts/{id}/result`.
- [ ] **Visual Question Review & Knowledge Gaps**: Built using `/api/quiz-attempts/{id}/review` to display color-coded visual text metrics highlighting student answer alignment and logic gaps.

### 5. AI Question Generation Studio
- [ ] **Lecture Notes Upload**: Built by POSTing files to `/api/lecture-notes` and displaying uploaded materials lists fetched from `/api/lecture-notes`.
- [ ] **AI Test Generation Form**: Built using a Svelte form that POSTs to `/api/ai/question-generation` with options for difficulty, question types, and notes context.

### 6. Performance Analytics
- [ ] **Analytics Overview Page**: Built by fetching `/api/analytics/me/overview` and building custom CSS progress rings and telemetry grids.
- [ ] **Detailed Topic Metrics Tracker**: Built using `/api/analytics/me/topic-performance` and `/api/analytics/me/attempt-topic-metrics` to plot historical accuracy trends.

### 7. Admin Content Configuration
- [ ] **Bulk Topic Upserting Form**: Built using `/api/topics/bulk-upsert` with dynamic rows added in Svelte.
- [ ] **Course Compact Management**: Built using `/api/courses/{id}/compacts` and the activation route to toggle and highlight active syllabi versions.

### 8. Offline-First IndexedDB Caching (Zero Latency)
- [ ] **Local Storage Fallback & Offline Mode**: Built using IndexedDB (via `idb` or local wrapper) to cache in-progress quizzes and lecture materials for offline study sessions.