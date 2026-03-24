<script lang="ts">
    import IconUpload from "~icons/tabler/upload";
    import IconAdjustmentsSpark from "~icons/tabler/adjustments-spark";
    import IconSparkles from "~icons/tabler/sparkles-2-filled";
</script>

<section class="mb-12">
    <p class="text-4xl font-bold font-reading">Studio</p>

    <p class="max-w-9/12 mt-4">
        Upload Lecture notes, syllabi, or reading materials to automatically
        generate rigorous, custom assessments based on your parameters
    </p>
</section>

<section class="flex flex-col lg:flex-row gap-lg">
    <div
        class="bg-surface border-border border flex flex-col items-center py-20 gap-md"
    >
        <div>
            <IconUpload class="text-muted size-8" />
        </div>
        <p class="text-2xl font-reading font-bold">
            Drag and Drop Lecture Materials
        </p>
        <p class="max-w-6/12 text-center text-sm text-muted">
            Accepts highly detailed PDF or TXT files up to 50MB. Text is
            automatically parsed and structured
        </p>
        <button class="btn-outline uppercase"> Browse Local Files </button>
    </div>

    <div class="bg-surface border-border border w-112 p-8 space-y-lg">
        <div class="flex items-center gap-sm">
            <IconAdjustmentsSpark class="size-6" />
            <p class="uppercase font-semibold text-sm">Generation Parameters</p>
        </div>
        <div class="flex flex-col gap-8 items-start">
            <label>
                <span class="font-semibold">Course Tag</span>
                <select>
                    <option>CST 211</option>
                    <option>CST 322</option>
                    <option>CST 421</option>
                </select>
            </label>

            <label>
                <span class="font-semibold">Assessment Format</span>
                <select>
                    <option>MCQ</option>
                    <option>Nothing</option>
                    <option>Much</option>
                </select>
            </label>

            <button class="btn-primary uppercase w-full">
                <p>Generate Questions</p>
                <IconSparkles class="size-4" />
            </button>
        </div>
    </div>
</section>

<style>
    @import "../app.css";

    label {
        @apply text-muted uppercase flex flex-col gap-sm text-sm w-full;
    }
</style>
