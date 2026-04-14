<script lang="ts">
    let { value, min, max }: { value: number; min: number; max: number } =
        $props();


    let progressbarWidth: number = $state(0);
    let thumbwidth = $derived((value / max) * progressbarWidth)
    $inspect(thumbwidth)
</script>

<div class=" bg-neutral-300 w-full h-4 rounded-full" bind:clientWidth={progressbarWidth}>
    <div class="bg-primary w-full h-4 rounded-full" style:width="{thumbwidth}px">

    </div>
</div>