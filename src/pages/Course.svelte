<script lang="ts">
    import IconStarFilled from "~icons/tabler/star-filled";
    import IconQuestionMark from "~icons/tabler/question-circle";
    import Progressbar from "../lib/components/Progressbar.svelte";
    import IconReload from "~icons/tabler/reload";
    import IconCircleCheck from "~icons/tabler/circle-check";
    import IconUsersGroup from "~icons/tabler/users-group";
</script>

<div class="flex items-center gap-4 font-mono">
    <p class="bg-primary text-white px-2 py-0.5">Level 400</p>
    <p class="border text-primary px-2 py-0.5">6 Credits</p>
</div>

<p class="font-serif text-5xl mt-6">CSC 411 - Artificial Intelligence</p>
<p class="mt-4 text-lg lg:w-7/12 lg:text-xl">
    An Intensive exploration of heuristic search, knowledge representation and
    machine learning paradigms. Led by Dr Oladipupo
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
            Enrolled Students
        </p>
        <p class="text-3xl italic font-serif">142</p>
    </div>
    <div class="border border-primary p-8 space-y-3">
        <IconCircleCheck class="size-12" />
        <p class="text-neutral-500 uppercase font-mono">Your progress</p>
        <div class="flex md:flex-col md:items-start items-center gap-4">
            <p class="text-3xl font-serif font-bold">65%</p>
            <Progressbar min={0} value={65} max={100} />
        </div>
    </div>
</div>

<div class="mt-12 xl:mt-20">
    <p class="text-3xl font-serif italic">Assessment Archive</p>
    <p class="text-neutral-600 text-lg mb-6">
        Comprehensive history of past examinations and project materials
    </p>

    <table class="w-full text-left border-collapse hidden lg:table">
        <thead>
            <tr
                class="bg-slate-50/50 border-b
            border-slate-100"
            >
                <th
                    class="px-6 py-4 label-text text-[10px] uppercase tracking-widest text-slate-400"
                    >Assessment Name</th
                >
                <th
                    class="px-6 py-4 label-text text-[10px] uppercase tracking-widest text-slate-400"
                    >Format</th
                >
                <th
                    class="px-6 py-4 label-text text-[10px] uppercase tracking-widest text-slate-400"
                    >Academic Year</th
                >
                <th
                    class="px-6 py-4 label-text text-[10px] uppercase tracking-widest text-slate-400 text-right"
                    >Actions</th
                >
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
            <!-- Row 1 -->
            {#each { length: 3 }}
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-5">
                        <div class="flex items-center gap-3">
                            <div
                                class="p-2 rounded-lg bg-red-50 text-red-600 flex items-center justify-center"
                            >
                                <IconQuestionMark class="size-8" />
                            </div>
                            <span class="text-slate-900 font-serif"
                                >Test 1 2023/24 (MCQ)</span
                            >
                        </div>
                    </td>
                    <td class="px-6 py-5"
                        ><span
                            class="text-xs px-2 py-1 bg-slate-100 text-slate-600 inline-block font-mono"
                            >Multiple Choice</span
                        ></td
                    >
                    <td class="px-6 py-5 text-sm text-slate-500">2023/24</td>
                    <td class="px-6 py-5 text-right">
                        <button class="btn btn-outline"
                            ><IconReload /> Retry</button
                        >
                    </td>
                </tr>
            {/each}
            <!-- Row 2 -->
        </tbody>
    </table>

    <ul class="divide-y space-y-12 divide-neutral-300 mt-6 lg:hidden">
        {#each { length: 3 }}
            <li class="flex justify-between pb-6">
                <div>
                    <p class="font-serif font-bold text-lg">
                        Test 1 2023/24 (MCQ)
                    </p>
                    <p>
                        <span
                            class="text-xs px-2 py-1 bg-slate-100 text-slate-600 inline-block font-mono"
                            >Multiple Choice</span
                        >
                        <span class="px-6 py-5 text-sm text-slate-500">
                            2023/24
                        </span>
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div class="btn btn-outline">
                        <IconReload /> Retry
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</div>
