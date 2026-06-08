<script lang="ts">
    import IconHistory from "~icons/tabler/history";
    import IconAlertCircle from "~icons/tabler/alert-circle";
    import IconArrowRight from "~icons/tabler/arrow-right";
    import IconX from "~icons/tabler/x";
</script>

<div class="mx-w-xl lg:w-full lg:flex gap-10">
    <section class="lg:w-2xl">
        <div id="background-img">
            <p class="uppercase text-lg">Official Examination</p>
            <p class="font-serif text-4xl font-bold">2026.MCQ</p>
        </div>
    
        <div
            class="p-4 border border-neutral-300 bg-surface mt-8 flex flex-col items-start gap-4"
        >
            <p class="uppercase font-mono font-bold">Integrity Notice</p>
            <p class="text-lg">
                This assessment is conducted under strict academic integrity
                protocols. Ensure you are in a quiet, private environment
            </p>
        </div>
    </section>
    
    <section class="mt-14 lg:mt-0 space-y-10 lg:p-8 lg:bg-surface lg:border lg:border-neutral-300">
        <div class="flex items-center justify-between">
            <p
                class="bg-neutral-200 font-mono font-bold px-2 py-1 rounded-lg uppercase"
            >
                Academic Year 2026
            </p>
            <p class="flex items-center gap-1"><IconHistory /> 60 Minutes</p>
        </div>
    
        <p class="text-3xl font-serif">Readiness Check</p>
        <p class="text-xl text-neutral-600 italic font-serif">
            Multiple Choice Questionnaire (MCQ)
        </p>
    
        <div class="info-grid">
            <div class="info-card">
                <p>Total Questions</p>
                <p>1 Question</p>
            </div>
            <div class="info-card">
                <p>Time Limit</p>
                <p>60m</p>
            </div>
            <div class="info-card">
                <p>Topics Covered</p>
                <p>Uncategorized</p>
            </div>
            <div class="info-card">
                <p>Constraints</p>
                <p>1 - 120mins</p>
            </div>
        </div>
    
        <div class="space-y-6">
            <p class="flex font-bold items-center gap-1">
                <IconAlertCircle /> Guidelines and Instructions
            </p>
    
            <ol class="list-decimal list-inside *:marker:font-bold space-y-3">
                <li>Ensure a stable internet connection before proceeding</li>
                <li>
                    The timer begins immediately once you click "Start Assessment"
                </li>
                <li>
                    Navigation away from this tab may trigger a security warning
                </li>
            </ol>
        </div>
    
        <div class="space-y-4 max-w-96 md:w-full">
            <button class="btn-primary w-full font-bold items-center gap-1 text-lg lg:text-xl"
                >Start Assessment <IconArrowRight /></button
            >
            <button class="btn-ghost w-full items-center gap-1"><IconX/> Return to Dashboard</button>
        </div>
    </section>
</div>

<style>
    @reference "../app.css";

    #background-img {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url("../assets/examImg.png");

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        @apply h-80 flex items-end justify-end flex-col p-4 text-white;
    }

    .info-card {
        @apply bg-surface p-4 border border-neutral-300 space-y-2 max-w-96 md:w-full;
    }

    .info-grid {
        @apply grid md:gap-4 gap-y-4 grid-cols-1 md:grid-cols-2;
    }

    .info-card > p:first-child {
        @apply font-bold uppercase;
    }

    .info-card > p:nth-child(2) {
        @apply text-2xl font-serif text-neutral-600 italic;
    }
</style>
