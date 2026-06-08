<script lang="ts">
    import { onMount } from "svelte";
    import IconPlus from "~icons/tabler/plus";
    import CourseCard from "../lib/components/CourseCard.svelte";
    import CourseInfo from "../lib/components/CourseInfo.svelte";
    import { fetchCourses } from "../lib/utils/api";
    import type { Course } from "../lib/utils/types";

    let courses: Course[] = $state([]);
    let loading = $state(true);

    onMount(async () => {
        try {
            courses = await fetchCourses();
        } catch (e) {
            console.error("Failed to load courses", e);
        } finally {
            loading = false;
        }
    });
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

    {#if loading}
        <p class="text-muted font-mono text-sm uppercase tracking-wide">Loading courses…</p>
    {:else if courses.length === 0}
        <p class="text-muted font-mono text-sm">No courses found.</p>
    {:else}
        <div class="courses-grid">
            {#each courses as course (course.id)}
                <CourseCard {course} />
            {/each}
        </div>
    {/if}
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
        @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-8 gap-4;
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
