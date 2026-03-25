<script lang="ts">
  import "./router";
  import { Router } from "sv-router";
  import Navbar from "./lib/components/Navbar.svelte";
</script>

<Navbar />
<main class="min-h-screen px-4 py-16 lg:px-20 xl:px-40 lg:py-24">
  <Router />
</main>
