import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ifpe-ads-activities/',  // Nome do repositório no GitHub Pages
  plugins: [vue()],
});
