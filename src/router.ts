import { createRouter } from "sv-router";
import Studio from "./pages/Studio.svelte";
import Home from "./pages/Home.svelte";
import Question from "./pages/Question.svelte";
import Loading from "./pages/Loading.svelte";
import Course from "./pages/Course.svelte"

export const { } = createRouter({
    "/qu": Question,
    "/studio": Studio,
    "/": Home,
    "/loading": Loading,
    "/course": Course
})