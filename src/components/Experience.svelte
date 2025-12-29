<script lang="ts">
  import { softwareResume, hardwareResume } from "../data/resume";
  import type { ResumeItem, ResumeData } from "../data/resume";
  import { slide, fade } from 'svelte/transition';
  import { isSoftware } from '../stores';

  // Helper to parse dates for sorting
  // Formats: "June 2025 - Present", "August 2024 -- August 2026", "May 2022"
  function parseDate(dateStr: string): number {
    if (!dateStr) return 0;
    const parts = dateStr.replace(/--/g, '-').split('-');
    // Use the end date for sorting (most recent first)
    // If "Present", use current date
    let targetDate = parts[parts.length - 1].trim();
    
    if (targetDate.toLowerCase() === 'present') {
      return new Date().getTime();
    }
    
    // Try parsing
    const parsed = Date.parse(targetDate);
    return isNaN(parsed) ? 0 : parsed;
  }

  interface TimelineItem extends ResumeItem {
    type: 'education' | 'experience';
  }

  // Reactive derived state
  $: currentResume = $isSoftware ? softwareResume : hardwareResume;
  
  $: combinedTimeline = [
    ...currentResume.education.map(i => ({ ...i, type: 'education' as const })),
    ...currentResume.experience.map(i => ({ ...i, type: 'experience' as const }))
  ].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  function toggleResume() {
    isSoftware.update(n => !n);
  }

</script>


<div class="py-20 max-w-4xl mx-auto px-4 text-foreground">
  <div class="flex flex-col items-center mb-16">
    <h2 class="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Journey</h2>
    
    <!-- Custom Toggle -->
    <div 
        class="bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full flex relative w-72 h-14 cursor-pointer border border-border transition-all hover:border-primary/50" 
        on:click={toggleResume} 
        on:keydown={(e) => e.key === 'Enter' && toggleResume()} 
        role="button" 
        tabindex="0"
    >
        <!-- Sliding Indicator -->
        <div 
            class="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-primary rounded-full transition-all duration-300 shadow-lg shadow-primary/20"
            style="left: {$isSoftware ? '6px' : 'calc(50% + 1px)'}"
        ></div>
        
        <div class="flex-1 flex items-center justify-center z-10 text-lg font-medium transition-colors duration-300 {$isSoftware ? 'text-primary-foreground' : 'text-muted-foreground'}">
            Software
        </div>
        <div class="flex-1 flex items-center justify-center z-10 text-lg font-medium transition-colors duration-300 {!$isSoftware ? 'text-primary-foreground' : 'text-muted-foreground'}">
            Hardware
        </div>
    </div>
  </div>

  <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

      {#key $isSoftware}
        <div class="space-y-12" in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
            {#each combinedTimeline as item, index}
                <div class="relative flex flex-col md:flex-row items-center md:items-start group">
                    
                    <!-- Timeline Node -->
                    <div class="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 mt-1.5 z-10 transition-colors duration-300
                        {item.type === 'education' ? 'bg-background border-accent' : 'bg-primary border-primary'}
                        group-hover:scale-125
                    "></div>

                    <!-- Date Label (Desktop: Opposite side) -->
                    <div class="hidden md:block w-1/2 px-10 py-1 text-right {index % 2 === 0 ? 'order-1 pr-12' : 'order-2 pl-12 text-left'}">
                         <span class="text-sm font-semibold tracking-wider text-muted-foreground uppercase">{item.date}</span>
                    </div>

                    <!-- Content Card -->
                    <div class="w-full md:w-1/2 pl-20 md:pl-0 {index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}">
                        
                        <!-- Mobile Date -->
                        <div class="md:hidden text-sm text-muted-foreground mb-1 ml-1">{item.date}</div>

                        <div class="relative bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group-hover:-translate-y-1">
                            
                            <div class="flex items-center gap-2 mb-2 {index % 2 === 0 ? '' : 'md:flex-row-reverse'}">
                                {#if item.type === 'education'}
                                    <span class="badge badge-accent badge-outline text-xs font-bold">EDUCATION</span>
                                {:else}
                                    <span class="badge badge-primary badge-outline text-xs font-bold">EXPERIENCE</span>
                                {/if}
                            </div>

                            <h3 class="text-xl font-bold text-foreground">{item.title}</h3>
                            <div class="text-lg text-primary font-medium mt-1">{item.subtitle}</div>
                            {#if item.location}
                                <div class="text-sm text-muted-foreground mt-0.5 mb-3 flex items-center gap-1 {index % 2 === 0 ? '' : 'md:justify-end'}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    {item.location}
                                </div>
                            {/if}
                            
                            <ul class="mt-4 space-y-2 text-sm text-muted-foreground text-left">
                                {#each item.points as point}
                                    <li class="flex items-start gap-2">
                                        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span>
                                        <span class="leading-relaxed drop-shadow-sm text-gray-300">{point}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
      {/key}
  </div>
</div>
