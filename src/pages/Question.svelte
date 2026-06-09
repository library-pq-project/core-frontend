<script lang="ts">
    import Editor from "../lib/components/Editor.svelte";
    import IconArrowLeft from "~icons/tabler/arrow-left";
    import IconFileUploadFilled from "~icons/tabler/file-upload-filled";
    import { navigate, route } from "../router";
    import {
        getQuizInfoFromAttempt,
        gradeAssessment,
        submitAttempt,
    } from "../lib/utils/api";
    import { onMount } from "svelte";
    import type { QuizQuestions, QuizResponseItem } from "../lib/utils/types";
    import { fly } from "svelte/transition";

    let id = $state(route.params.id);
    let quizQuestions = $state<QuizQuestions | null>(null);
    let transitionDirection: "forward" | "backward" = $state("forward");
    let attemptResponses: QuizResponseItem[] = $state([]);

    $inspect(attemptResponses);

    onMount(function () {
        getQuizInfoFromAttempt(id!).then(function (resp) {
            quizQuestions = resp;
        });
    });

    let quizLength = $derived(quizQuestions ? quizQuestions.length : 0);
    let currentPosition = $state(1);

    $inspect(currentPosition).with(function (_, value) {
        console.log("Current Positon: ", value);
    });

    function moveForward() {
        if (currentPosition < quizLength) {
            transitionDirection = "forward";
            currentPosition++;
        }
    }

    function submit() {
        const quizInfo = {
            attemptId: id!,
            quizId: id!,
        };

        function navigateToResultId() {
            navigate("/report/:id", { params: { id: id! } });
        }

        if (!quizQuestions) return;
        submitAttempt({ responses: attemptResponses }, quizInfo)
            .then(function () {
                gradeAssessment(quizInfo).then(navigateToResultId);
            })
            .catch(function () {
                gradeAssessment(quizInfo).then(navigateToResultId);
            });
    }

    function onChooseOption(event: Event) {
        const elem = event.target as HTMLInputElement;

        if (!quizQuestions) return;

        function getAnswerText(optionId: number) {
            if (!quizQuestions) return "";

            const optionGotten = quizQuestions[
                currentPosition - 1
            ].options.find((option) => option.id == optionId);
            if (!optionGotten) return "";

            return optionGotten.option_text_snapshot;
        }

        const questionOptionIndex = attemptResponses.findIndex(
            (a) => a.quiz_question_id == currentPosition,
        );

        console.log("Index ", questionOptionIndex);

        if (questionOptionIndex == -1) {
            const newOption: QuizResponseItem = {
                quiz_question_id: currentPosition,
                selected_quiz_question_option_id: Number(elem.value),
                answer_text: getAnswerText(Number(elem.value)),
            };
            attemptResponses.push(newOption);
            return;
        }

        attemptResponses[questionOptionIndex].answer_text = getAnswerText(
            Number(elem.value),
        );
        attemptResponses[questionOptionIndex].selected_quiz_question_option_id =
            Number(elem.value);
        attemptResponses[questionOptionIndex].quiz_question_id =
            currentPosition;

        return;
    }

    function moveBackward() {
        if (currentPosition > 0) {
            transitionDirection = "backward";
            currentPosition--;
        }
    }

    $inspect(quizQuestions).with(function (_, value) {
        console.log("Quiz Questions: ", JSON.stringify(value));
    });
</script>

{#if quizQuestions}
    {@const currentQuestion = quizQuestions[currentPosition - 1]}
    <section class="max-w-3xl mx-auto">
        <div class="space-y-8 mb-8 lg:mb-16 md:flex justify-between">
            <button class="btn-outline"
                ><IconArrowLeft />
                <p>Save & Exit</p></button
            >
            <p class="font-mono uppercase text-sm md:text-base text-muted">
                Question {currentPosition}/{quizLength}
            </p>
        </div>

        <div class="space-y-6 lg:space-y-8">
            {#key currentPosition}
                <div
                    class="space-y-6 lg:space-y-8"
                    in:fly={{
                        x: transitionDirection == "forward" ? 100 : -100,
                    }}
                >
                    <h2 class="question-title">
                        {currentQuestion.question_text}
                    </h2>
                    {#if currentQuestion.question_type === "objective"}
                        {#each currentQuestion.options as option, index (index)}
                            <label class="option">
                                <input
                                    type="radio"
                                    name="option"
                                    id=""
                                    value={option.id}
                                    onchange={onChooseOption}
                                    checked={attemptResponses.length >=
                                        currentPosition &&
                                        attemptResponses[currentPosition - 1]
                                            .selected_quiz_question_option_id ==
                                            option.id}
                                />
                                <p>{option.option_text_snapshot}</p>
                            </label>
                        {/each}
                    {:else}
                        <div class="space-y-6">
                            <Editor />
                            <div
                                class="border border-neutral-300 h-32 lg:h-64 flex items-center justify-center flex-col text-center"
                            >
                                <IconFileUploadFilled
                                    class="size-8 text-neutral-500"
                                />
                                <p
                                    class="text-neutral-500 uppercase text-sm md:text-base"
                                >
                                    Or upload your answer document
                                </p>
                                <p
                                    class="text-xs md:text-sm text-neutral-400 font-mono"
                                >
                                    PDF, DOCX up to 10MB
                                </p>
                            </div>
                        </div>
                    {/if}
                </div>
            {/key}
            <div class="flex items-center justify-between">
                <button
                    class="btn-outline"
                    onclick={moveBackward}
                    disabled={currentPosition == 1}>Previous</button
                >

                {#if currentPosition == quizLength}
                    <button class="btn-primary" onclick={submit}
                        >Submit Attempt</button
                    >
                {:else}
                    <button
                        class="btn-primary"
                        onclick={moveForward}
                        disabled={currentPosition == quizLength}>Next</button
                    >
                {/if}
            </div>
        </div>
    </section>
{/if}

<style>
    @import "../app.css";

    .question-title {
        @apply font-reading text-2xl font-bold lg:text-3xl;
    }

    .option {
        @apply flex items-center font-reading text-lg gap-4 select-none hover:bg-background-hover p-2 hover:cursor-pointer;
    }
</style>
