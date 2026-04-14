<script lang="ts">
    import IconTextFilled from "~icons/tabler/file-text-filled";
    import type { Course } from "../utils/types";

    let { course }: { course?: Course } = $props();
</script>

<article class="card">
    <div class="card-top">
        <p class="course-code">BIO 1O1</p>
        <p class="course-title">Cellular Biology and Genetics</p>
        <p class="course-lecturer">Prof E Rosalind</p>
    </div>

    <div class="card-bottom">
        <div class="docs">
            <IconTextFilled />
            <p>12 Docs</p>
        </div>
        <p class="question-number">124 Qs</p>
    </div>

    <a href="/course" aria-label="Open Card" class="card-link"> </a>
</article>

<style>
    @reference "../../app.css";

    .card {
        @apply border border-border max-w-112 relative hover:-translate-y-1.5 transition-transform;
    }

    .card-top {
        @apply p-8 bg-surface border-b border-b-border space-y-4;
    }

    .card-bottom {
        @apply flex items-center justify-between px-8 py-4;
    }

    .course-title {
        @apply font-reading text-2xl font-bold;
    }

    .course-code {
        @apply border px-4 py-2 w-fit text-sm text-muted font-mono;
    }

    .course-lecturer {
        @apply text-muted text-lg font-reading;
    }

    .docs {
        @apply flex items-center text-muted gap-2 font-mono text-sm;
    }

    .question-number {
        @apply font-bold text-sm font-mono;
    }

    .card-link {
        @apply h-full inset-0 w-full absolute;
    }
</style>
