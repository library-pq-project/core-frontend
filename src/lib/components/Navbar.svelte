<script lang="ts">
    import IconMenu from "~icons/tabler/menu-2";
    import IconX from "~icons/tabler/x";
    import logo from "../../assets/logo.svg";

    import { fade } from "svelte/transition";

    let isOpen = $state(false);
</script>

{#snippet links()}
    <li><a href="/studio">Studio</a></li>
    <li><a href="/repo">Repository</a></li>
    <li><a href="/">Home</a></li>
{/snippet}
<nav class="navbar">
    <img src={logo} alt="" class="w-36 lg:w-48" />

    <ul class="links horizontal">
        {@render links()}
    </ul>

    <button class="md:hidden">
        <IconMenu
            class="size-6"
            onclick={() => {
                isOpen = true;
            }}
        />
    </button>

    {#if isOpen}
        <ul transition:fade={{ duration: 75 }} class="navbar-full links">
            <li>
                <button>
                    <IconX
                        class="size-8"
                        onclick={() => {
                            isOpen = false;
                        }}
                    />
                </button>
            </li>
            {@render links()}
        </ul>
    {/if}
</nav>

<style>
    @import "../../app.css";

    .links {
        @apply text-muted;

        & > * {
            @apply pb-0.5;
        }
    }

    .horizontal {
        @apply items-center gap-4 lg:gap-8 uppercase tracking-wide hidden md:flex;
    }

    .navbar {
        @apply flex items-center gap-8 p-4 lg:gap-12 lg:p-8 justify-between md:justify-start;
    }

    .navbar-full {
        @apply fixed text-black bg-background w-full inset-0 flex items-center flex-col text-lg justify-center gap-8  uppercase;
    }
</style>
