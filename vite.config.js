import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns';

// localhost part
dns.setDefaultResultOrder('verbatim');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:9000/", // the address that u serve in the backend 
    },
  },
})