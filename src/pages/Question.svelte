<script lang="ts">
    import IconArrowLeft from "~icons/tabler/arrow-left";

    let questionType: "MCQ" | "Essay" = $state("MCQ");
</script>

<section class="max-w-3xl mx-auto">
    <div class="space-y-4 mb-8 lg:mb-16 lg:flex justify-between">
        <button class="btn-ghost"
            ><IconArrowLeft />
            <p>Save & Exit</p></button
        >
        <p class="font-mono uppercase text-muted">Question 03/10</p>
    </div>

    <div class="space-y-4 lg:space-y-8">
        <h2 class="text-xl lg:text-3xl font-reading font-bold">
            Describe the process of mitosis and its primary function in
            eukaryotic cells. How does it differ from meiosis in terms of
            genetic variation
        </h2>
        <p class="text-muted text-sm lg:max-w-10/12 lg:text-base">
            Consider the Stages: Prophase, Metaphase, Anaphase, and Telophase in
            your response. Focus on the chromosomal activity during each phase
        </p>
        {#if questionType === "MCQ"}
            {#each ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'] as option}
                <div class="flex items-center font-reading text-lg gap-4">
                    <input type="checkbox" name="" id="" checked>
                    <p>{option}</p>
                </div>
            {/each}
        {:else}
            <textarea
                placeholder="Draft your answer here"
                class="w-full p-4 placeholder:font-reading resize-none border-border border"
                rows="10"
            ></textarea>
        {/if}
        <button class="btn-outline">Submit Answer</button>
    </div>
</section>
