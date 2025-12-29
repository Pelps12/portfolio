<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = true;

  function close() {
    visible = false;
  }
</script>

{#if visible}
  <div 
    class="bg-warning/20 border-b border-warning/30 text-yellow-950 dark:text-yellow-100 px-4 py-3 relative"
    in:slide={{ duration: 300 }} 
    out:fade={{ duration: 200 }}
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between pr-8">
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-warning shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-sm md:text-base font-medium">
          <span class="font-bold">Note for Substack:</span> My start date availability is <span class="underline decoration-warning decoration-2 underline-offset-2">May/August 2026</span>. It's a weird UTD masters thing.
        </p>
      </div>
      
      <button 
        on:click={close}
        class="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-warning/20 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
{/if}
