import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': {} 
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
