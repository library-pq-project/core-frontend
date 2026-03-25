<script lang="ts">
    import IconCircleCheckFilled from "~icons/tabler/circle-check-filled"
</script>

<article
    class="course-info-card"
>
    <div class="flex items-start flex-col gap-4 lg:flex-row">
        <div class="border p-2 border-border w-fit">
            <IconCircleCheckFilled class="size-6" />
        </div>
        <div>
            <p class="course-title">Mitosis & Meiosis Quiz</p>
            <div class="flex items-center gap-2">
                <p class="course-code">BIO 101</p>
                <p class="text-sm text-muted font-mono uppercase">
                    / 2 Hours Ago
                </p>
            </div>
        </div>
    </div>

    <div class="space-y-2">
        <p class="score">92%</p>
        <button class="btn-outline w-fit"
            ><p class="text-sm uppercase font-mono text-muted">
                Review Result
            </p></button
        >
    </div>
</article>


<style>
    @reference "../../app.css";
    
    .course-info-card {
        @apply flex flex-col gap-6 pb-8 md:flex-row items-start justify-between hover:bg-background-hover pt-4 px-4;
    }

    .course-title {
        @apply text-2xl font-reading;
    }

    .course-code {
        @apply font-mono text-sm font-bold; 
    }

    .score {
        @apply font-reading text-4xl;
    }
</style>