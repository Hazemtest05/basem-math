// @ts-check
import { defineConfig } from 'astro/config';

// Static, zero-JS-by-default educational site.
// Interactive pieces are progressively-enhanced vanilla-TS islands loaded per-page.
export default defineConfig({
  site: 'https://math.hazem.ae',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
