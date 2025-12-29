<script lang="ts">
  import { onMount } from 'svelte';

  let theme: 'light' | 'dark' = 'light';

  onMount(() => {
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark();
    } else {
      setLight();
    }
  });

  function toggleTheme() {
    if (theme === 'dark') {
      setLight();
    } else {
      setDark();
    }
  }

  function setDark() {
    theme = 'dark';
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  function setLight() {
    theme = 'light';
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'mytheme'); // assuming mytheme is the light theme name in tailwind config
    localStorage.setItem('theme', 'light');
  }
</script>

<button on:click={toggleTheme} class="btn btn-ghost btn-circle" aria-label="Toggle Theme">
  {#if theme === 'light'}
    <!-- Moon Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  {:else}
    <!-- Sun Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  {/if}
</button>
