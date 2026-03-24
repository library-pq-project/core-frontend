import { createRouter } from "sv-router";
import Studio from "./pages/Studio.svelte";
import Home from "./pages/Home.svelte";
import Question from "./pages/Question.svelte";

export const { } = createRouter({
    "/qu": Question,
    "/studio": Studio,
    "/": Home
})