import { defineConfig } from 'vite'
import { viteGekkoPlugin } from '../magic/vite-gekko-plugin';

export default defineConfig({
  root: __dirname,
  plugins: [
    viteGekkoPlugin()
  ]
});
