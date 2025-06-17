import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Preconfigure alias for the TradingView Charting Library if installed
// The library files can be copied to /public/charting_library and imported from there
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
