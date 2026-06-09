import { createRouter } from "sv-router";
import Studio from "./pages/Studio.svelte";
import Home from "./pages/Home.svelte";
import Question from "./pages/Question.svelte";
import Loading from "./pages/Loading.svelte";
import Course from "./pages/Course.svelte"
import Dashboard from "./pages/Dashboard.svelte";
import Assessment from "./pages/Assessment.svelte";
import Report from "./pages/Report.svelte";

export const { route, navigate } = createRouter({
    "/quiz/:id": Question,
    "/studio": Studio,
    "/": Home,
    "/loading": Loading,
    "/course/:id": Course,
    "/admin": Dashboard,
    "/assessment/:id": Assessment,
    "/report/:id": Report
})