import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://efd-ye.org', output: 'static', integrations: [sitemap()] });
