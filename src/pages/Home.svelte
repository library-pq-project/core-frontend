<script lang="ts">
    import IconPlus from "~icons/tabler/plus";
    import CourseCard from "../lib/components/CourseCard.svelte";
    import CourseInfo from "../lib/components/CourseInfo.svelte";
</script>

<section class="top-section">
    <div class="space-y-4">
        <p class="greeting">Good Morning Ezekiel</p>

        <p class="info">
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
    <p class="section-heading mb-8">Active Courses</p>

    <div class="courses-grid">
        {#each { length: 1 }}
            <CourseCard />
        {/each}
    </div>
</section>

<section>
    <p class="section-heading">Recent Assessments</p>

    <div class="assessment-list">
        {#each { length: 2 }}
            <CourseInfo />
        {/each}
    </div>
</section>

<style>
    @reference "../app.css";
    .courses-grid {
        @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-8 place-items-center gap-4;
    }

    .top-section {
        @apply flex flex-col lg:flex-row items-start gap-4 lg:items-end pb-8 mb-8 border-b border-border;
    }
    
    .greeting {
        @apply font-reading text-4xl font-semibold;
    }

    .info {
        @apply text-muted xl:max-w-9/12 xl:text-lg;
    }

    .section-heading {
        @apply text-muted font-mono uppercase;
    }

    .assessment-list {
        @apply divide-y-2 divide-border border-t border-border pt-8;
    }
</style>
