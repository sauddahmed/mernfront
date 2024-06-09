// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to 0.0.0.0 to make the server accessible externally
    port: 5173, // Optional: specify the port Vite should use (default is 5173)
  },
});
