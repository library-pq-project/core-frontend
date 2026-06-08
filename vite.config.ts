import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite';

// https://vite.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'SERVER_'],
  plugins: [svelte(), tailwindcss(), Icons({
    compiler: 'svelte',
  }),],
})
