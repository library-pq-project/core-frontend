<script lang="ts">
    import IconPlus from "~icons/tabler/plus";
    import IconTextFilled from "~icons/tabler/file-text-filled";
    import IconCircleCheckFilled from "~icons/tabler/circle-check-filled";
</script>

<section class="flex flex-col lg:flex-row items-start gap-4 lg:items-end pb-8 mb-8 border-b border-border">
    <div class="space-y-4">
        <p class="font-reading text-4xl font-semibold">Good Morning Ezekiel</p>

        <p class="text-muted xl:max-w-9/12 xl:text-lg">
            Here is an overview of your active courses and recent performance
            metrics. You have generated 42 questions this week
        </p>
    </div>

    <button class="btn-primary">
        <IconPlus />
        <p class="uppercase">New Assessment</p>
    </button>
</section>

<section class="mb-24">
    <p class="text-muted font-mono mb-8">Active Courses</p>

    <div class="courses-grid">
        {#each { length: 1 }}
            <article class="border border-border max-w-112">
                <div class="p-8 bg-surface border-b border-b-border space-y-4">
                    <p
                        class="border px-4 py-2 w-fit text-sm text-muted font-mono"
                    >
                        BIO 1O1
                    </p>
                    <p class="font-reading text-2xl font-bold">
                        Cellular Biology and Genetics
                    </p>
                    <p class="text-muted text-lg font-reading">
                        Prof E Rosalind
                    </p>
                </div>

                <div class="flex items-center justify-between px-8 py-4">
                    <div
                        class="flex items-center text-muted gap-2 font-mono text-sm"
                    >
                        <IconTextFilled />
                        <p>12 Docs</p>
                    </div>
                    <p class="font-bold text-sm font-mono">124 Qs</p>
                </div>
            </article>
        {/each}
    </div>
</section>

<section>
    <p class="text-muted uppercase font-mono">Recent Assessments</p>

    <div class="divide-y-2 divide-border space-y-8 border-t border-border pt-8">
        {#each { length: 2 }}
            <article
                class="flex flex-col gap-6 pb-8 lg:flex-row items-start justify-between"
            >
                <div class="flex items-start flex-col gap-4 lg:flex-row">
                    <div class="border p-2 border-border w-fit">
                        <IconCircleCheckFilled class="size-6" />
                    </div>
                    <div>
                        <p class="text-2xl font-reading">
                            Mitosis & Meiosis Quiz
                        </p>
                        <div class="flex items-center gap-2">
                            <p class="font-mono text-sm font-bold">BIO 101</p>
                            <p class="text-sm text-muted font-mono uppercase">
                                / 2 Hours Ago
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-2">
                    <p class="font-reading text-4xl">92%</p>
                    <button class="btn-outline w-fit"
                        ><p class="text-sm uppercase font-mono text-muted">
                            Review Result
                        </p></button
                    >
                </div>
            </article>
        {/each}
    </div>
</section>

<style>
    @reference "../app.css";
    .courses-grid {
        @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-8 place-items-center gap-4;
    }
</style>
