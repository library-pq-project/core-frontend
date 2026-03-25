<script lang="ts">
  import "./router";
  import { Router } from "sv-router";
  import Navbar from "./lib/components/Navbar.svelte";
</script>

<Navbar />
<main class="min-h-screen px-4 md:px-12 py-16 lg:px-20 xl:px-40 ">
  <Router />
</main>
