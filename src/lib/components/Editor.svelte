<script lang="ts">
    import Quill from "quill";
    import { onMount } from "svelte";
    import { toolbarOptions } from "../utils/toolbarOptions";

    let editorContainer: HTMLDivElement;

    onMount(function () {
        const quill = new Quill(editorContainer, {
            theme: "snow",
            placeholder: "Draft your answer here",
            modules: { toolbar: toolbarOptions },
        });
    });
</script>

<div class="my-4 space-y-2">
    <div bind:this={editorContainer}></div>
</div>
