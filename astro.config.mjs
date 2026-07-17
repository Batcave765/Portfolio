// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL ? `https://${process.env.VERCEL_URL}` : 'https://Batcave765.github.io',
  base: process.env.VERCEL ? '/' : '/Portfolio',
});
