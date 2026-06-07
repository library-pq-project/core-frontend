<script lang="ts">
    import IconPencilBolt from "~icons/tabler/pencil-bolt";
    import IconCloudUpload from "~icons/tabler/cloud-upload";
    import IconFileUploadFilled from "~icons/tabler/file-upload-filled";
    import IconFileDescription from "~icons/tabler/file-description";
    import IconTrash from "~icons/tabler/trash";
    import IconSend2 from "~icons/tabler/send-2"
</script>
<section class="main">
    
    <div class="w-full">
        <div class="space-y-2">
            <h2 class="text-2xl font-serif font-bold lg:text-3xl">Admin Workspace</h2>
            <p class="lg:text-lg xl:text-xl text-neutral-700">
                Initialize a new academic module with resources and assessment partners
            </p>
        </div>
        
        <div class="px-4 py-8 border border-neutral-300 space-y-4 bg-white mt-14 lg:px-8 lg:py-16">
            <div class="flex items-center gap-1">
                <IconPencilBolt />
                <h2 class="section-title">Course foundations</h2>
            </div>
        
        
            <label class='form-field'>
                <span class="text-neutral-500 font-bold text-sm">Course Title</span>
                <input type="text" placeholder="e.g. Advanced Quantum Mechanics">
            </label>
        
            <label class='form-field'>
                <span class="text-neutral-500 font-bold text-sm">Description</span>
                <textarea name="" id="" placeholder="Outline the learning objectives and course curriculum" rows=10></textarea>
            </label>
        
            <label class='form-field'>
                <span class="text-neutral-500 font-bold text-sm">Lecturer's Name</span>
                <input type="text" name="" id="" placeholder="Dr Julian Sterling">
            </label>
        </div>
        
        <div class="space-y-8 mt-18">
            <div class="flex items-center gap-1">
                <IconCloudUpload />
                <h2 class="section-title">Asset Management</h2>
            </div>
        
            <div class="upload-container">
                <div class="bg-neutral-300 rounded-full p-2">
                    <IconFileUploadFilled class="size-10"/>
                </div>
                <p class="font-serif text-lg font-bold">Bulk upload files</p>
                <p>Drag and drop Past Questions or Lecture Notes here</p>
                <p class="font-mono text-sm text-neutral-500">PDF, DOCX, PPTX up to 50MB</p>
            </div>
        
            <div class="space-y-4">
                {#each {length: 3}}
                    <div class="file-item">
                        <div class="flex items-center gap-4">
                            <IconFileDescription class="size-6"/>
                            <div>
                                <p class="font-bold text-neutral-800">2023_Final_Exam.PDF</p>
                                <p class="text-xs font-mono text-neutral-600"><span>Past Question</span>. <span>2.4MB</span></p>
                            </div>
                        </div>
        
                        <div>
                            <IconTrash class="size-6 text-neutral-600"/>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="lg:pt-20 inset-0 lg:sticky max-w-96">
        <div class="bg-primary text-white p-8 space-y-4 mt-14">
            <p class="font-bold text-2xl font-serif">Ready to Launch</p>
            <p>Finalize your module entry. This will notify enrolled students and update faculty registy instantly</p>
            <button class="upload-button"> Save and Publish Course <IconSend2/></button>
        </div>
    </div>
</section>

<style>
    @reference "../app.css";

    .form-field {
        @apply flex flex-col items-start gap-2;

        & span {
            @apply font-mono;
        }

        & input, textarea {
            @apply w-full;
        }
    }

    .section-title {
        @apply text-lg font-bold lg:text-2xl;
    }

    .file-item {
        @apply flex items-center justify-between py-4 px-3 bg-white border border-neutral-300;
    }

    .upload-container {
        @apply py-16 gap-4 px-6 flex flex-col items-center text-center border-2 border-neutral-400 border-dashed;
    }

    .upload-button {
        @apply px-4 py-3 bg-white text-neutral-800 font-bold inline-flex items-center gap-2 hover:bg-neutral-100 focus:outline-0 focus:ring-2 focus:ring-offset-1 focus:ring-neutral-400;
    }

    .main {
        @apply mx-auto max-w-112 lg:max-w-4xl xl:max-w-6xl lg:gap-12 flex flex-col lg:flex-row items-start;
    }
</style>
