// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://gustipardo-blog.vercel.app",
  integrations: [tailwind(), icon({
    include: {
      lucide: ["instagram", "list-filter"]
    }}
  ), sitemap(), mdx()]
});