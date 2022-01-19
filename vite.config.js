import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
})