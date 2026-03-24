import { createRouter } from "sv-router";
import Studio from "./pages/Studio.svelte";
import Home from "./pages/Home.svelte";

export const { } = createRouter({
    "/studio": Studio,
    "/": Home
})