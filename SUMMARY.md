# Summary — TODO Item #1: Courses & Assessments Discovery

## What was built

The Home page and Course page now fetch **live data from the backend API** instead of rendering hardcoded placeholders. Navigating to `/course/1` loads the real course record and its assessment archive from the server.

---

## Files changed

### `vite.config.ts`
Added `envPrefix: ['VITE_', 'SERVER_']` so that the `SERVER_URL` variable in `.env` is exposed to the client bundle via `import.meta.env.SERVER_URL`. By default Vite only exposes variables prefixed with `VITE_`; this config extends that to also include `SERVER_` prefixed variables.

### `src/lib/utils/types.ts`
Replaced the old stub `Course` interface with one that matches the real API response shape:
- `id`, `code`, `slug`, `title`, `description`, `level`, `semester`, `active_compact_version`

Added a new `Assessment` interface matching the `/api/assessments` response:
- `id`, `slug`, `title_label`, `course_id`, `academic_session_id`, `semester_id`, `year_label`, `assessment_type`, `question_format`, `source_type`, `created_by_user_id`, `default_duration_minutes`, `total_available_questions`

### `src/lib/utils/api.ts`
Rewrote with three exported functions:
| Function | Endpoint | Purpose |
|----------|----------|---------|
| `fetchCourses()` | `GET /api/courses` | Returns all courses |
| `fetchCourse(id)` | `GET /api/courses` → filter | Returns a single course by ID |
| `fetchAssessments(courseId?)` | `GET /api/assessments?course_id=` | Returns assessments, optionally filtered by course |

All functions use a private `apiFetch<T>()` wrapper that prepends `SERVER_URL` and throws on non-2xx responses.

### `src/lib/components/CourseCard.svelte`
- The `course` prop is now **required** (was optional).
- Card renders `course.code`, `course.title`, `course.level`, `course.semester`, and `course.active_compact_version`.
- Link points to `/course/{course.id}` instead of the static `/course`.

### `src/pages/Home.svelte`
- Calls `fetchCourses()` inside `onMount`.
- Shows a "Loading courses…" message while fetching.
- Renders a `CourseCard` for each course returned by the API, keyed by `course.id`.
- Shows an empty-state message when no courses exist.

### `src/pages/Course.svelte`
- Reads the `:id` route param via `route.getParams("/course/:id").id`.
- Calls `fetchCourse(id)` and `fetchAssessments(id)` in parallel inside `onMount`.
- Loading / error / empty states are handled gracefully.
- **Course header** now renders live `course.code`, `course.title`, `course.description`, `course.level`, and `course.semester`.
- **Stats cards**: "Available Assessments" card shows `assessments.length` from the API.
- **Assessment Archive table** iterates over real `assessments` array with:
  - `title_label` (falls back to `assessment_type (question_format)` if empty)
  - `formatLabel()` helper mapping `objective` → "Multiple Choice", `theory` → "Theory / Essay", etc.
  - `source_type` badge colour-coded: violet for AI-generated, red for actual past papers
  - `year_label` for the academic year column
- Mobile list uses the same data-driven rendering.

---

## How to test

1. Make sure the backend is running on `http://localhost:8000` (matches `.env`).
2. Run `npm run dev` (or `pnpm dev`).
3. Open the home page — you should see course cards populated from the API.
4. Click the **CSC411** card — you'll land on `/course/1` showing the course details and its 3 assessments.

---

## What is NOT yet wired

- The "Practice" button on each assessment row doesn't navigate anywhere yet (that's TODO item #2 — Practice Quiz Flow).
- The "Recent Assessments" section on the Home page still uses the static `CourseInfo` placeholder.
- The progress percentage (65%) and difficulty label ("High/Advanced") are still hardcoded — the API doesn't provide these yet.
