import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: './', // Ensure the base path for assets and scripts is relative
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'public/home.html'),
        chat: resolve(__dirname, 'public/chat.html')
      }
    }
  }
})
