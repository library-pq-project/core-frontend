<script lang="ts">
    import { cubicInOut } from "svelte/easing";

    import type { TransitionConfig } from "svelte/transition";

    function countUp<T extends HTMLElement>(
        node: T,
        {
            delay = 0,
            duration = 3500,
            easing = cubicInOut,
        }: Partial<TransitionConfig>,
    ) {
        const initialValue = parseInt(node.textContent) || 0;

        return {
            delay,
            duration,
            easing,
            tick: (t: number) => {
                node.textContent = String(Math.round(t * initialValue));
            },
        };
    }
</script>

<div class="flex items-start justify-between gap-10">
    <div class="space-y-2">
        <h2 class="text-5xl font-serif">Evaluation Report</h2>
        <p class="text-3xl">9/10</p>
    </div>

    <div class="space-y-2">
        <p class="font-mono uppercase text-neutral-600 text-sm">Final Score</p>
        <p class="font-serif text-6xl">
            <span in:countUp={{}}>92</span>%
        </p>
    </div>
</div>

<hr class="text-neutral-300 mt-8" />

<div class="space-y-14 py-16">
    {#each { length: 3 }}
        <div class="space-y-8">
            <p class="text-xl font-bold font-serif lg:text-2xl">
                What is the difference between meiosis and mitosis?
            </p>

            <div class="flex gap-4 items-start">
                <div class="review-card border-red-600">
                    <p class=" text-red-800">Student Option</p>
                    <p>I don't know, I don't offer Biology anymore</p>
                </div>
                <div class="review-card border-green-600">
                    <p class=" text-green-800">Correct Option</p>
                    <p>Some nerdy stuff I can't really explain right now</p>
                </div>
            </div>
        </div>
    {/each}
</div>

<div class="flex flex-col items-center gap-8 mt-20">
    <p class="text-xl font-mono uppercase text-neutral-600">What's Next?</p>
    <div class="flex justify-center gap-2">
        <a href="/" class="btn-outline">Back to Dashboard</a>
        <a href="/studio" class="btn-primary">Review Next Assessment</a>
    </div>
</div>

<style>
    @reference "../app.css";

    .review-card {
        @apply p-4 border space-y-2 lg:text-lg lg:p-8;

        & > p:first-child {
            @apply font-mono uppercase text-sm lg:text-base;
        }

        & > p:nth-child(2) {
            @apply leading-8;
        }
    }
</style>
