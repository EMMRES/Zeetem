import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "Zeetem/", // Use relative path for Namecheap or cPanel hosting
  plugins: [react()],
});
