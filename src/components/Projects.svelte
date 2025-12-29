<script lang="ts">
  import { softwareResume, hardwareResume } from "../data/resume";
  import { isSoftware } from "../stores";
  import { fade } from 'svelte/transition';

  // Derived reactive statement to switch projects base on store
  $: currentProjects = $isSoftware ? softwareResume.projects : hardwareResume.projects;
  
  // Just for display: map "builtWith" text or HTML if we wanted, 
  // but for now we'll just show the subtitle/link if available.
  // The resume data doesn't have the SVG icons built-in like the static file did,
  // so we'll adapt slightly or could enhance resume.ts later with icons.
</script>


<div id="projects" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative min-h-[400px]">
  {#key $isSoftware}
    <div class="contents" in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
        {#each currentProjects as project}
            <div class="card max-w-md bg-secondary justify-between mx-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/10">
            <!-- 
                If we have images in resume.ts later, we can uncomment this.
                For now resume.ts only has text data for hardware projects.
                Software projects have the generic ones if matched by name, 
                but let's stick to the data we have.
            -->
            <!-- <div class="p-6 ">
                <figure><img src={project.image} class="object-cover w-auto rounded-xl" alt="Album"/></figure>
            </div> -->
            
            <div class="card-body max-w-md rounded-md p-6">
                <h2 class="card-title text-xl font-bold mb-2">{project.title}</h2>
                
                {#if project.date}
                    <div class="badge badge-outline text-xs mb-2 opacity-70">{project.date}</div>
                {/if}

                <!-- Use points as description -->
                <ul class="text-sm space-y-2 mb-4 flex-grow opacity-80">
                    {#each project.points as point}
                        <li class="list-disc list-outside ml-4">{point}</li>
                    {/each}
                </ul>

                {#if project.link}
                    <div class="card-actions justify-start items-center mt-auto pt-4 border-t border-white/10 w-full">
                        <a class="btn btn-primary btn-sm w-full" href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project 
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                {/if}
            </div>
            </div>
        {/each}
    </div>
  {/key}
</div>
