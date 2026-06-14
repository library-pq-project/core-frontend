<script lang="ts">
    import IconPencilBolt from "~icons/tabler/pencil-bolt";
    import IconCloudUpload from "~icons/tabler/cloud-upload";
    import IconSend2 from "~icons/tabler/send-2";
    import { createCourse, uploadCourseCompact } from "../lib/utils/api";
    import { navigate } from "../router";

    let courseTitle = $state("Computer Architecture and Organization");
    let courseDescription = $state(
        "Deals with CPU, memory management, errors and caches and all that jazz",
    );
    let courseCode = $state("CSC425");
    let courseCompact = $state<FileList>();

    let errorMessage: {
        isValid: boolean;
        description: string;
        code: string;
        title: string;
        file: string;
    } = $derived(validate());

    function validate() {
        let error = {
            isValid: false,
            description: "",
            code: "",
            title: "",
            file: "",
        };

        if (courseTitle.replaceAll(" ", "").length < 20) {
            error.title =
                "Course title is required, it should be more than 20 characters in length";
            return error;
        }

        if (courseDescription.replaceAll(" ", "").length < 50) {
            error.description =
                "Course description is required, it should be more than 50 characters in length";
            return error;
        }

        if (courseCode.replaceAll(" ", "").length < 3) {
            error.code = "Course code should not be empty";
            return error;
        }

        if (!courseCode.startsWith("CSC")) {
            error.code =
                'This is not a valid course code. Course codes should start with "CSC"';
            return error;
        }

        if (!/CSC[1-4][1-4][1-9]/.test(courseCode)) {
            error.code = "This is not valid course code. Please check";
            return error;
        }

        if (!courseCompact) {
            error.file = "Please upload a course compact for this course";
            return error;
        }

        error.isValid = true;
        return error;
    }

    async function submitForm() {
        if (!errorMessage.isValid) return;

        const payload = {
            code: courseCode,
            title: courseTitle,
            description: courseDescription,
            level: "400",
            semester: "Alpha",
        };

        const course = await createCourse(payload);

        if (!courseCompact) return;

        try {
            await uploadCourseCompact(course.id, courseCompact[0]);
        } catch (ex) {
            console.log(ex);
            return;
        }

        navigate("/");
    }
</script>

{#snippet error(field: "code" | "description" | "title")}
    {#if !errorMessage.isValid}
        <p class="text-red-600 text-sm">{errorMessage[field]}</p>
    {/if}
{/snippet}

<section class="main">
    <div class="w-full">
        <div class="space-y-2">
            <h2 class="text-2xl font-serif font-bold lg:text-3xl">
                Admin Workspace
            </h2>
            <p class="lg:text-lg xl:text-xl text-neutral-700">
                Initialize a new academic module with resources and assessment
                partners
            </p>
        </div>

        <div
            class="px-4 py-8 border border-neutral-300 space-y-4 bg-white mt-14 lg:px-8 lg:py-16"
        >
            <div class="flex items-center gap-1">
                <IconPencilBolt />
                <h2 class="section-title">Course foundations</h2>
            </div>

            <label class="form-field">
                <span class="text-neutral-500 font-bold text-sm"
                    >Course Title</span
                >
                {@render error("title")}
                <input
                    type="text"
                    placeholder="e.g. Advanced Quantum Mechanics"
                    bind:value={courseTitle}
                />
            </label>

            <label class="form-field">
                <span class="text-neutral-500 font-bold text-sm"
                    >Description</span
                >
                {@render error("description")}
                <textarea
                    name=""
                    id=""
                    placeholder="Outline the learning objectives and course curriculum"
                    rows="10"
                    bind:value={courseDescription}
                ></textarea>
            </label>

            <label class="form-field">
                <span class="text-neutral-500 font-bold text-sm"
                    >Course Code</span
                >
                {@render error("code")}
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="CSC 444"
                    bind:value={courseCode}
                />
            </label>
        </div>

        <div class="space-y-8 mt-18">
            <div class="flex items-center gap-1">
                <IconCloudUpload />
                <h2 class="section-title">Course Compact Management</h2>
            </div>

            <input
                type="file"
                bind:files={courseCompact}
                class="border px-4 py-2 input"
            />
        </div>
    </div>

    <div class="lg:pt-20 inset-0 lg:sticky max-w-96">
        <div class="bg-primary text-white p-8 space-y-4 mt-14">
            <p class="font-bold text-2xl font-serif">Ready to Launch</p>
            <p>
                Finalize your module entry. This will notify enrolled students
                and update faculty registy instantly
            </p>
            <button class="upload-button" onclick={submitForm}>
                Save and Publish Course <IconSend2 /></button
            >
        </div>
    </div>
</section>

<style>
    @reference "../app.css";

    .form-field {
        @apply flex flex-col items-start gap-2;

        & span {
            @apply font-mono;
        }

        & input,
        textarea {
            @apply w-full;
        }
    }

    .section-title {
        @apply text-lg font-bold lg:text-2xl;
    }

    .upload-button {
        @apply px-4 py-3 bg-white text-neutral-800 font-bold inline-flex items-center gap-2 hover:bg-neutral-100 focus:outline-0 focus:ring-2 focus:ring-offset-1 focus:ring-neutral-400;
    }

    .main {
        @apply mx-auto max-w-112 lg:max-w-4xl xl:max-w-6xl lg:gap-12 flex flex-col lg:flex-row items-start;
    }
</style>
