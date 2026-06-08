<script lang="ts">
    import { onMount } from "svelte";
    import IconStarFilled from "~icons/tabler/star-filled";
    import IconQuestionMark from "~icons/tabler/question-circle";
    import Progressbar from "../lib/components/Progressbar.svelte";
    import IconReload from "~icons/tabler/reload";
    import IconCircleCheck from "~icons/tabler/circle-check";
    import IconUsersGroup from "~icons/tabler/users-group";

    import { route } from "../router";
    import { fetchCourse, fetchAssessments } from "../lib/utils/api";
    import type { Course, Assessment } from "../lib/utils/types";

    let id = Number(route.getParams("/course/:id").id);

    let course: Course | null = $state(null);
    let assessments: Assessment[] = $state([]);
    let loading = $state(true);
    let error: string | null = $state(null);

    onMount(async () => {
        try {
            const [c, a] = await Promise.all([
                fetchCourse(id),
                fetchAssessments(id),
            ]);
            course = c;
            assessments = a;
        } catch (e: any) {
            error = e.message ?? "Failed to load course";
            console.error(e);
        } finally {
            loading = false;
        }
    });

    /**
     * Derive a human-readable format label from question_format.
     */
    function formatLabel(qf: string): string {
        const map: Record<string, string> = {
            objective: "Multiple Choice",
            MCQ: "Multiple Choice",
            theory: "Theory / Essay",
            practical: "Practical",
            case_based: "Case Study",
            mixed: "Mixed Format",
        };
        return map[qf] ?? qf;
    }

    /**
     * Pick a colour pair for the source badge.
     */
    function sourceBadge(src: string): { bg: string; text: string } {
        return src === "ai_generated"
            ? { bg: "bg-violet-50", text: "text-violet-600" }
            : { bg: "bg-red-50", text: "text-red-600" };
    }

    const randomProgress = Math.ceil(Math.random() * 100);
</script>

{#if loading}
    <p class="text-muted font-mono text-sm uppercase tracking-wide py-20 text-center">
        Loading course…
    </p>
{:else if error}
    <p class="text-red-600 font-mono text-sm py-20 text-center">{error}</p>
{:else if course}

<div class="flex items-center gap-4 font-mono">
    <p class="bg-primary text-white px-2 py-0.5">Level {course.level}</p>
    <p class="border text-primary px-2 py-0.5">{course.semester} Semester</p>
</div>

<p class="font-serif text-5xl mt-6">{course.code} – {course.title}</p>
<p class="mt-4 text-lg lg:w-7/12 lg:text-xl">
    {course.description}
</p>

<div class="flex flex-col md:flex-row gap-6 md:*:w-84 mt-6 lg:mt-10">
    <div class="bg-primary text-white p-8 space-y-2">
        <div class="p-3 bg-accent rounded-full w-fit">
            <IconStarFilled class="size-8" />
        </div>
        <p class="text-neutral-400 uppercase font-mono">
            Course Difficulty
        </p>
        <p class="text-3xl italic font-serif">High/Advanced</p>
    </div>
    <div class="border border-primary p-8 space-y-3">
        <IconUsersGroup class="size-12" />
        <p class="text-neutral-500 uppercase font-mono">
            Available Assessments
        </p>
        <p class="text-3xl italic font-serif">{assessments.length}</p>
    </div>
    <div class="border border-primary p-8 space-y-3">
        <IconCircleCheck class="size-12" />
        <p class="text-neutral-500 uppercase font-mono">Your progress</p>
        <div class="flex md:flex-col md:items-start items-center gap-4">
          
            <p class="text-3xl font-serif font-bold">{randomProgress}%</p>
            <Progressbar min={0} value={randomProgress} max={100} />
        </div>
    </div>
</div>

<!-- Assessment Archive -->
<div class="mt-12 xl:mt-20">
    <p class="text-3xl font-serif italic">Assessment Archive</p>
    <p class="text-neutral-600 text-lg mb-6">   
        Comprehensive history of past examinations and AI-generated practice sets
    </p>

    {#if assessments.length === 0}
        <p class="text-muted font-mono text-sm py-8">No assessments found for this course yet.</p>
    {:else}
        <!-- Desktop table -->
        <table class="w-full text-left border-collapse hidden lg:table">
            <thead>
                <tr class="bg-slate-50/50 border-b border-slate-100">
                    <th class="table-header">Assessment Name</th>
                    <th class="table-header">Format</th>
                    <th class="table-header">Academic Year</th>
                    <th class="table-header">Source</th>
                    <th class="table-header text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
                {#each assessments as assessment (assessment.id)}
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-5">
                            <div class="flex items-center gap-3">
                                <div class="p-2 rounded-lg {sourceBadge(assessment.source_type).bg} {sourceBadge(assessment.source_type).text} flex items-center justify-center">
                                    <IconQuestionMark class="size-8" />
                                </div>
                                <span class="text-slate-900 font-serif">
                                    {assessment.title_label || `${assessment.assessment_type} (${assessment.question_format})`}
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-5">
                            <span class="text-xs px-2 py-1 bg-slate-100 text-slate-600 inline-block font-mono">
                                {formatLabel(assessment.question_format)}
                            </span>
                        </td>
                        <td class="px-6 py-5 text-sm text-slate-500">{assessment.year_label}</td>
                        <td class="px-6 py-5">
                            <span class="text-xs px-2 py-1 inline-block font-mono {sourceBadge(assessment.source_type).bg} {sourceBadge(assessment.source_type).text}">
                                {assessment.source_type === 'ai_generated' ? 'AI Generated' : 'Past Paper'}
                            </span>
                        </td>
                        <td class="px-6 py-5 text-right">
                            <button class="btn btn-outline"><IconReload /> Practice</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <!-- Mobile list -->
        <ul class="divide-y space-y-12 divide-neutral-300 mt-6 lg:hidden">
            {#each assessments as assessment (assessment.id)}
                <li class="flex justify-between pb-6">
                    <div>
                        <p class="font-serif font-bold text-lg">
                            {assessment.title_label || `${assessment.assessment_type} (${assessment.question_format})`}
                        </p>
                        <p>
                            <span class="text-xs px-2 py-1 bg-slate-100 text-slate-600 inline-block font-mono">
                                {formatLabel(assessment.question_format)}
                            </span>
                            <span class="px-6 py-5 text-sm text-slate-500">
                                {assessment.year_label}
                            </span>
                        </p>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="btn btn-outline">
                            <IconReload /> Practice
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>

{/if}

<style>
    @reference "../app.css";

    .table-header {
        @apply px-6 py-4 text-[10px] uppercase tracking-widest text-slate-400;
    }
</style>