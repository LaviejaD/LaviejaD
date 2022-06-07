import { defineConfig, } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  , base: "/LaviejaD/",
  server: {
    host: '192.168.0.11'
  }
  ,
})

console.log("ViteJS config loaded")
