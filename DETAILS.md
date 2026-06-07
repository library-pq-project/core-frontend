Based on the project's foundational scope and technical requirements, the system is designed to solve a critical educational challenge: **the inefficiency, high cognitive friction, and privacy risks associated with traditional exam preparation.** Rather than focusing on *how* it is styled, here is the exact operational problem-and-solution matrix the agent needs to build.

---

### 1. The Core Problem Being Solved

Students often struggle to turn raw, unstructured study materials into active, effective self-assessment. Traditional workflows suffer from three major issues:

* **The "Passive Reading" Trap:** Students review slides, notes, and past papers passively, leading to an illusion of competence without actual retrieval practice.
* **Fragmented Tools & Subscriptions:** Relying on external, cloud-based AI tools requires constant switching between windows, copy-pasting text chunks, and worrying about subscription limits or internet connectivity.
* **Privacy and Data Exposure:** Uploading proprietary university course materials or personal jottings to external cloud platforms risks intellectual property exposure and data tracking.

---

### 2. What the App Must Do (The Functional Pipeline)

The system acts as a localized engine that converts static inputs into a private, interactive testing cycle. The agent must implement a flow that executes the following sequence:

```
[Unstructured Input] ➔ [Localized Parsing] ➔ [Dynamic Blueprinting] ➔ [Objective Diagnostics]

```

#### A. Input Ingestion (The Material Source)

The application must accept unstructured, real-world student inputs, specifically:

* **Lecture Notes & Summaries:** Hand-typed or exported text documentation.
* **Personal Jottings:** Fragmented, informal study notes.
* **Past Examination Questions:** Historical test papers used to anchor the context.

#### B. Dynamic Material Matching & Generation

Once materials are loaded, the app translates them into three distinct types of practice tasks based on the student's selected difficulty:

1. **Multiple-Choice Questions (MCQs):** For rapid retrieval practice and core fact-checking.
2. **Theoretical Essays:** For assessing deeper understanding, synthesis, and argument structure.
3. **Case Studies:** For testing critical thinking and the application of concepts to real-world scenarios.

#### C. Active Response Evaluation

The system must eliminate subjective self-grading by acting as a strict evaluator:

* It captures the student’s typed or selected answers directly in the interface.
* It compares those responses against a localized marking rubric and target answers derived from the source documents.

#### D. Comparative Diagnostic Feedback

Instead of a simple "pass/fail" score, the application must provide an analytical critique:

* **Score Tracking:** Calculates clear performance percentages.
* **Gap Analysis:** Identifies what the student missed or misconstrued.
* **Visual Text Metrics:** Highlights specific phrases where the student's logic aligns with the text (correct areas) vs. where concepts were omitted or incorrect (knowledge gaps).

---

### 3. Ultimate Technical Objective for the Agent

The agent is building a **privacy-first, zero-latency feedback loop**.

Because the generation, test rendering, scoring, and data persistence (via IndexedDB) happen completely inside the user's browser, the application successfully solves the reliance on external servers. It gives students an instantaneous, offline, and completely private testing environment that turns raw study text into structured academic mastery.