import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import compression from 'vite-plugin-compression';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Changed from '/getlunex.github.io/' to '/'

  plugins: [
    react(),

    // PWA — Make Lunex installable like an app
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Lunex – AI SaaS for Teams',
        short_name: 'Lunex',
        description: 'Lunar-speed AI workflows, zero-code automation, seamless sync.',
        theme_color: '#00d4ff',
        background_color: '#0a0a1a',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'assets' },
          },
        ],
      },
    }),

    // Ultra-compress assets
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginalAssets: false,
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],

  build: {
    outDir: 'dist',
    sourcemap: false, // Changed to false for smaller build size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ai: ['@google/generative-ai'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },

  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },

  preview: {
    port: 4000,
    open: true,
  },
});
