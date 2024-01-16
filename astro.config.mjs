import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

const site = import.meta.env.PROD
  ? 'https://jepnoda.github.io'
  : 'http://localhost:4321'
// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    tailwind(),
    icon({
      iconDir: './src/assets/icons',
    }),
    sitemap(),
  ],
})
