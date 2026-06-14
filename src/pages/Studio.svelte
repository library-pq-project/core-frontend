<script lang="ts">
    import IconUpload from "~icons/tabler/upload";
    import IconAdjustmentsSpark from "~icons/tabler/adjustments-spark";
    import IconSparkles from "~icons/tabler/sparkles-2-filled";
    import {
        fetchCourses,
        generateQuestions,
        uploadLectureNote,
    } from "../lib/utils/api";

    let availableCourses = $state(fetchCourses());

    let availableFiles = $state<FileList>();
    let lectureNote = $derived.by(function () {
        if (!availableFiles || availableFiles.length < 0) return;
        else return availableFiles[0];
    });

    let courseTag = $state("");
    let assessmentFormat = $state("");
    let questionCount = $state("");
    let additionalInstructions = $state("");
    let quizTitle = $state("");

    let errorMessage = $derived(validate());

    function validate() {
        let error = {
            isValid: false,
            description: "",
            code: "",
            title: "",
            file: "",
        };

        if (!lectureNote) {
            error.file = "Please upload a Lecture Note.";
            return error;
        }

        if (quizTitle.length < 5) {
            error.title = "Quiz title should be more than 5 characters";
            return error;
        }

        error.isValid = true;
        return error;
    }

    async function submitForm() {
        if (!errorMessage.isValid || !courseTag || !lectureNote) return;

        const response = await uploadLectureNote(lectureNote, {
            title: quizTitle,
            course_id: courseTag,
        });

        const payload = {
            quiz_title: quizTitle,
            user_prompt: additionalInstructions,
            course_id: courseTag,
            requested_count: parseInt(questionCount) || 10,
            lecture_note_id: response.id,
            question_type: assessmentFormat.toLowerCase(),
            difficulty_level: "mixed",
        };

        generateQuestions(payload);
    }
</script>

{#snippet error(field: "file" | "title")}
    {#if !errorMessage.isValid}
        <p class="text-red-600 text-sm">{errorMessage[field]}</p>
    {/if}
{/snippet}

<section class="mb-12">
    <p class="title">Studio</p>

    <p class="info">
        Upload Lecture notes, syllabi, or reading materials to automatically
        generate rigorous, custom assessments based on your parameters
    </p>
</section>

<section class="lg:max-w-2xl lg:my-20 space-y-14">
    <div>
        <label class="items-start">
            <span>Upload Lecture Notes</span>
            {@render error("file")}
            <input type="file" class="border p-4" bind:files={availableFiles} />
        </label>
    </div>

    <div class="space-y-8 border bg-white border-neutral-300 p-8">
        <div class="flex items-center gap-sm">
            <IconAdjustmentsSpark class="size-6" />
            <p class="uppercase font-semibold text-sm">Generation Parameters</p>
        </div>
        <div class="flex flex-col gap-8 items-start">
            <label>
                <span>Course Title</span>
                {@render error("title")}
                <input type="text" class="input" bind:value={quizTitle} />
            </label>

            <label>
                <span>Course Tag</span>
                <select bind:value={courseTag}>
                    {#await availableCourses then data}
                        {#each data as course (course.id)}
                            <option value={course.id}
                                >{course.title} - {course.code}</option
                            >
                        {/each}
                    {/await}
                </select>
            </label>

            <label>
                <span>Assessment Format</span>
                <select bind:value={assessmentFormat}>
                    <option>Theory</option>
                    <option>MCQ</option>
                    <option>Mixed</option>
                </select>
            </label>

            <label>
                <span>Question Number</span>
                <select bind:value={questionCount}>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </select>
            </label>

            <label>
                <span>Additonal Instructions</span>
                <textarea class="input" bind:value={additionalInstructions}
                ></textarea>
            </label>

            <button class="btn-primary uppercase" onclick={submitForm}>
                <p>Generate Questions</p>
                <IconSparkles class="size-4" />
            </button>
        </div>
    </div>
</section>

<style>
    @import "../app.css";

    label {
        @apply text-muted  flex flex-col gap-sm text-sm w-full;

        span {
            @apply font-semibold uppercase;
        }
    }

    .info {
        @apply md:max-w-9/12 mt-4;
    }
</style>
