Academic Minimalist
Product Overview
The Pitch: An intelligent study companion that transforms passive lecture notes into active recall exercises. It generates, administers, and grades custom assessments while building a collaborative, searchable question bank for all students.
For: University students who want rigorous, self-driven testing to validate their understanding of complex course material.
Device: desktop
Design Direction: Academic Minimalist. A clean, distraction-free environment focused on high readability, generous whitespace, refined typography, and a calming palette of slate gray and academic navy blue. Reminiscent of beautifully typeset academic papers.
Inspired by: Notion, JSTOR, Roam Research

Screens
Dashboard: Hub for active courses and recent performance metrics
Studio (Upload & Generate): Split-view workspace for document upload and question configuration
Assessment View: Distraction-free interface for taking generated tests
Evaluation Report: Granular breakdown of student answers versus system marking schemes
Question Repository: Advanced search interface for browsing the global question bank

Key Flows
Generate & Test Flow: Convert notes into actionable study material
User is on Studio -> sees upload dropzone and configuration panel
User uploads PDF and clicks Generate Assessment -> system processes text and generates questions based on selected type (MCQ, Theory, Case)
User lands on Assessment View -> enters answers and submits for automated grading
Search & Study Flow: Find existing practice questions
User is on Question Repository -> sees search bar and course tag filters
User clicks Course: BIO-101 and types mitosis -> list filters instantly
User selects a question -> takes the micro-assessment and views the stored marking scheme

Design System
Color Palette
Primary: #1B2A4A - Academic Navy; Buttons, primary text, prominent borders
Background: #FDFCFA - Warm Paper; Main page background, reduces eye strain
Surface: #FFFFFF - Crisp White; Floating cards, input fields
Text: #2D3748 - Charcoal; Body text, serif reading text
Muted: #718096 - Slate Gray; Secondary text, dividers, placeholders
Accent: #2B6CB0 - Scholar Blue; Interactive links, active states, focus rings
Typography
Distinctive split typography: a rigorous sans-serif for the UI and an elegant, traditional serif for the academic content.
Headings (UI): Instrument Sans, 600, 24-32px
Body (Academic Content): Newsreader, 400, 18px, 1.6 line-height
UI Elements (Nav/Buttons): Instrument Sans, 500, 14px
Small text: Instrument Sans, 400, 13px
Monospace (Tags/Code): JetBrains Mono, 400, 12px
Style notes: Sharp corners (0px or 2px radius), single-pixel borders (1px solid #E2E8F0), zero drop shadows (relying on borders and whitespace for hierarchy). High contrast, high whitespace, purely structural layout.
Design Tokens
:root {
  --color-primary: #1B2A4A;
  --color-background: #FDFCFA;
  --color-surface: #FFFFFF;
  --color-text: #2D3748;
  --color-muted: #718096;
  --color-accent: #2B6CB0;
  --color-border: #E2E8F0;
  --font-ui: 'Instrument Sans', sans-serif;
  --font-reading: 'Newsreader', serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius: 2px;
  --spacing-sm: 8px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 96px;
}

Screen Specifications
Dashboard
Purpose: Provide a structural overview of the student's courses and recent test performance.
Layout: Left sidebar (240px), main content area with a top hero greeting and a masonry grid of course folders.
Key Elements:
Sidebar Nav: Minimal text links, active state indicated by a 2px left border in #1B2A4A
Course Cards: White background, 1px #E2E8F0 border, contains Course Code (monospace), Course Name (serif), and generated question count
Action Bar: Top right sticky header with + New Assessment button (Navy fill, White text)
States:
Empty: "No courses yet. Begin by uploading your first syllabus or lecture note."
Loading: Skeleton lines matching font x-heights, pulsing in #E2E8F0
Error: Red text (#C53030) inline banner
Components:
Course Card: 320px x 160px, #FFFFFF surface, 1px border, #1B2A4A title
Stat Pill: Auto-width, #F7FAFC surface, #2D3748 monospace text
Interactions:
Hover Course Card: Border darkens to #1B2A4A, cursor becomes pointer
Click + New Assessment: Routes to Studio screen
Responsive:
Desktop: Sidebar + 3-column grid
Tablet: Sidebar collapses to icons, 2-column grid
Mobile: Bottom nav bar, 1-column stack
Studio (Upload & Generate)
Purpose: Ingest lecture notes and configure the AI generation parameters.
Layout: Split screen. Left 60%: Document preview/upload zone. Right 40%: Generation configuration panel.
Key Elements:
Dropzone: Large dashed border (2px dashed #CBD5E0), centered upload icon, accepts PDF/TXT
Config Panel: Form with dropdowns for Course Tag, Question Type (MCQ, Theory, Case), and Difficulty slider
Generate Button: Full width at bottom of config panel, #1B2A4A background, 48px height
States:
Empty: Dropzone shows "Drag & Drop Lecture Materials"
Loading (Generating): Button text changes to "Synthesizing..." with an indeterminate linear progress bar below the header
Error: "File exceeds 50MB limit."
Components:
Config Dropdown: 40px height, chevron icon, #2D3748 text, Instrument Sans
Tag Input: Accepts typed text, converts to gray monospace pills
Interactions:
File Drop: Background tints to #EBF8FF on drag-over
Click Generate: Disables form, initiates progress animation, routes to Assessment View on success
Responsive:
Desktop: 60/40 split
Tablet: Stacks vertically, Dropzone 400px height
Mobile: Stacks vertically, Dropzone 250px height
Assessment View
Purpose: A focused, distraction-free testing environment.
Layout: Single-column, max-width 720px, perfectly centered. No sidebar, no header nav.
Key Elements:
Progress Indicator: Subtle text at top right, e.g., Question 3 of 10
Question Text: Set in Newsreader, 24px, #1B2A4A, high legibility
Input Area: For theory/case: a resizable textarea. For MCQ: radio button list with full-width clickable rows.
Submit Button: Bottom right, tertiary style (1px border, transparent background, #1B2A4A text) until filled, then solid #1B2A4A.
States:
Empty: Input area blank with placeholder "Draft your answer here..."
Loading: N/A (Data pre-fetched)
Error: "Please select an answer before proceeding."
Components:
MCQ Row: 64px height, 1px border bottom, radio circle left, serif text
Theory Textarea: 240px min-height, Newsreader font, no resize handle (auto-expands)
Interactions:
Select MCQ: Row background flashes #F7FAFC, radio circle fills #1B2A4A
Focus Textarea: Border turns #2B6CB0, removes default browser outline
Responsive:
Desktop: Centered 720px column
Tablet: padding: 48px
Mobile: padding: 24px, font size scales to 20px
Evaluation Report
Purpose: Side-by-side comparison of student answer, system grade, and ideal marking scheme.
Layout: Top summary metric (Grade). Below, a list of expandable question cards showing the detailed breakdown.
Key Elements:
Grade Header: Huge typography (Instrument Sans, 72px), e.g., 85%, with a one-sentence qualitative assessment.
Comparison Block: Left column (Student Answer), Right column (Marking Scheme & Rubric).
Feedback Highlights: Specific phrases in the student answer highlighted in green (#F0FFF4) for hitting rubric points, or red (#FFF5F5) for missing/incorrect concepts.
States:
Empty: N/A
Loading: Calculating grade spinner (24px, #1B2A4A)
Error: "Unable to process grading. Try again."
Components:
Rubric Checklist: Unordered list, JetBrains Mono 13px, custom checkmark/cross icons
Highlight Tag: Inline span, padded 2px 4px, rounded 2px
Interactions:
Hover Rubric Item: Highlights corresponding text in the Student Answer pane
Click Expand: Opens accordion to show detailed instructor rationale
Responsive:
Desktop: 2-column comparison blocks
Tablet: Stacks comparison blocks vertically
Mobile: Hide rubric by default behind a "View Rubric" toggle
Question Repository
Purpose: Database search for students to find practice material without their own notes.
Layout: Top search bar spanning 100% width. Left filter sidebar (280px). Right results list (auto).
Key Elements:
Omnibar: Huge search input (64px height, 24px text), magnifying glass icon, no border, bottom 2px solid #1B2A4A.
Filter Panel: Checkboxes for Course Code, Topic, Question Type, Difficulty.
Result Item: Title, Course Tag (monospace), snippet of the question, and metadata (e.g., Taken 42 times).
States:
Empty: "No questions match your criteria. Try adjusting your filters."
Loading: Skeleton rows, 80px height each
Error: "Search service unavailable."
Components:
Search Input: Instrument Sans, #2D3748, placeholder #A0AEC0
Result Row: 1px border bottom, padding-y: 24px, hover background #F7FAFC
Interactions:
Type in Search: Debounced 300ms, live updates results list
Click Result: Opens modal with question preview and "Take Practice" CTA
Responsive:
Desktop: Sidebar + Results list
Tablet: Filter moves to top horizontal bar (dropdowns)
Mobile: Filter hidden behind a "Filter" button, full-bleed results

Build Guide
Stack: HTML + Tailwind CSS v3
Build Order:
Assessment View - Establishes the core typography relationship (Newsreader vs Instrument Sans) and the stark, distraction-free layout rules.
Dashboard - Sets up the global navigation pattern, grid layouts, and standardized card components.
Studio - Introduces form elements, input states, and complex split-pane CSS Grid structures.
Evaluation Report - Implements the complex data-display patterns, nested highlights, and rubric components.
Question Repository - Connects the search components, interactive states, and dense lists.