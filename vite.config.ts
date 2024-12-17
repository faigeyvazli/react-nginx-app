import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@app': '/src',
      '@test': '/test',
    },
  },
  plugins: [react()],
});
