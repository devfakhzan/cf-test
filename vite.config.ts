import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/home.html'), // Input HTML
        chat: resolve(__dirname, 'src/chat.html') // Input HTML
      }
    },
    // You can specify the output directory here
    outDir: '../dist' // This will be the root folder for your output
  }
})
