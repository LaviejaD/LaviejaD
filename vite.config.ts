import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LaviejaD",
  server: {
    host: "localhost",
  },
});

console.log("ViteJS config loaded");
