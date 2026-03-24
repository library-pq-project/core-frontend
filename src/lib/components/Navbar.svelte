<script lang="ts">
    import IconX from "~icons/tabler/x";
    import logo from "../../assets/logo.svg";
</script>

<!--TODO Please Work on navbar switching  -->


<style>
    @import "../../app.css";

    .links {
        @apply text-muted;

        & > * {
            @apply pb-0.5;
        }

        & > .active {
            @apply text-text border-b-2;
        }
    }
</style>
