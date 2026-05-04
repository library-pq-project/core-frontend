<script lang="ts">
    import Editor from "../lib/components/Editor.svelte";
    import IconArrowLeft from "~icons/tabler/arrow-left";
    import IconFileUploadFilled from "~icons/tabler/file-upload-filled";

    let questionType: "MCQ" | "Essay" = $state("MCQ");
</script>

<section class="max-w-3xl mx-auto">
    <div class="space-y-8 mb-8 lg:mb-16 md:flex justify-between">
        <button class="btn-outline"
            ><IconArrowLeft />
            <p>Save & Exit</p></button
        >
        <p class="font-mono uppercase text-sm md:text-base text-muted">
            Question 03/10
        </p>
    </div>

    <div class="space-y-6 lg:space-y-8">
        <h2 class="question-title">
            Describe the process of mitosis and its primary function in
            eukaryotic cells. How does it differ from meiosis in terms of
            genetic variation
        </h2>
        <p class="question-hint">
            Consider the Stages: Prophase, Metaphase, Anaphase, and Telophase in
            your response. Focus on the chromosomal activity during each phase
        </p>
        {#if questionType === "MCQ"}
            <!-- {#each ["Prophase", "Metaphase", "Anaphase", "Telophase"] as option}
                <label class="option">
                    <input type="checkbox" name="" id="" checked />
                    <p>{option}</p>
                </label>
            {/each} -->
            <div class="space-y-6">
                <Editor />

                <div class="border border-neutral-300 h-32 lg:h-64 flex items-center justify-center flex-col text-center">
                    <IconFileUploadFilled class="size-8 text-neutral-500"/>
                    <p class="text-neutral-500 uppercase text-sm md:text-base">Or upload your answer document</p>
                    <p class="text-xs md:text-sm text-neutral-400 font-mono">PDF, DOCX up to 10MB</p>
                </div>
            </div>
        {:else}
            <textarea
                placeholder="Draft your answer here"
                class="essay-entry"
                rows="10"
            ></textarea>
        {/if}
        <button class="btn-primary">Submit Answer</button>
    </div>
</section>

<style>
    @import "../app.css";

    .question-title {
        @apply font-reading text-2xl font-bold lg:text-3xl;
    }

    .question-hint {
        @apply text-muted text-sm lg:max-w-10/12 lg:text-base;
    }

    .option {
        @apply flex items-center font-reading text-lg gap-4 select-none hover:bg-background-hover p-2;
    }

    .essay-entry {
        @apply w-full p-4 placeholder:font-reading resize-none border-border border hover:bg-background-hover focus:outline-0 focus:ring-2 focus:ring-offset-1 transition-colors;
    }
</style>
