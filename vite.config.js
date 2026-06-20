import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Heavy vendor libs — loaded once, cached forever
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui':     ['lucide-react', '@headlessui/react'],
          'vendor-forms':  ['react-hook-form'],
          // Page chunks are auto-split by Vite because of lazy() imports above.
          // This vendor split just ensures they aren't duplicated inside each page chunk.
        },
      },
    },
    // Warn if any chunk exceeds 200 KB (gzip ~60 KB) — keep bundles honest
    chunkSizeWarningLimit: 200,
  },
})
