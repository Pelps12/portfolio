import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://oluwapelps.com',
  integrations: [mdx(), sitemap(), tailwind(), react(), svelte()],
  output: "server",
  adapter: cloudflare({mode: "directory"})
});