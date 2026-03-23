<script lang=ts>
    import logo from "../../assets/logo.svg"
</script>

<!--TODO Please Work on navbar switching  -->
<nav
    class="flex flex-col md:flex-row fixed md:static bg-background w-full h-screen gap-lg md:px-md md:py-md items-center border border-border py-20 md:items-start md:h-fit"
>
    
    <img src={logo} alt="" class="w-36"/>
    <ul class="uppercase flex gap-md links flex-col md:flex-row items-center">
        <li>Dashboard</li>
        <li>Studio</li>
        <li class="active">Repository</li>
    </ul>
</nav>

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
