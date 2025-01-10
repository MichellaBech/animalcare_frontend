import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7070', // URL til din backend
        changeOrigin: true, // Ændrer "Origin"-headeren til backend
        secure: false, // Tillader HTTP (ikke HTTPS) i udvikling
      },
    },
  },
});
