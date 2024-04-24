/// <reference types="vitest" />
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import manifest from './manifest.json';

interface MyScreenshot {
  src: string;
  sizes: string;
  type: string;
  form_factor: 'wide' | 'narrow';
  label: string;
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'], // Add other resources you want to cache
      manifest: {
        name: 'Studio Go Fit',
        short_name: 'Studio Go Fit',
        start_url: 'https://fuzzy-chainsaw-x4gr6q7955rcwxp-3000.app.github.dev/',
        display_override: ['fullscreen', 'minimal-ui'],
        display: 'fullscreen',
        background_color: '#000000',
        lang: 'en',
        scope: 'https://fuzzy-chainsaw-x4gr6q7955rcwxp-3000.app.github.dev/',
        description: '"Viva fit, viva saudável. Então, vamos juntos nessa jornada GoFit!🏃‍♂️💪',
        theme_color: '#000000',
        icons: [
          {
            src: 'https://img.playbook.com/Tcdeqb2AxPNRnC1kTzc5W9ae4BdT8kOajZBjP7b0to0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA5MDg5M2Jk/LWIyZDAtNDIwZS1h/YTYwLTY3ZGFjZWRj/ZmI5NA', // Path to icon
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/X2IGg0v0muIknyjMsBGYDfc-ag3N4OH5CfF2ShnTM2c/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzIzNmFiMDUy/LTE4NDktNDE3My1h/N2JiLTNjNzRlMzg1/MGRkYg', // Path to icon
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/fSUXJpP9g5WBc9WQDyMFee8XZgaoHkvyDCzQtDQceGA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk2YWYyZDU5/LWYxMzMtNDU5MS1h/YTEyLTQwMzk3N2Y0/MWJhYg', // Path to icon
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/p9UHgrxIydV-w8rVQxoCRrImf5eNGO7pzcghaQxU5Ms/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VlYWQyYjNm/LTZiZjMtNDNkNi04/M2E0LWNmNjIxNDNk/YzczOA', // Path to icon
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/GGGAhxlpM-paqKnrhzTbTXLImYAEKzjmJq9La6veYcY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM4OTk5NWMx/LWVmZDEtNGYwZS05/MjkxLWYwYjVlYmMw/OWI5ZA', // Path to icon
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/yb_COrAmf5TOBnb31rh4jHxSsct0vS5Q5Vd1QxEeiic/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y1MzY0ZGVk/LWI3NzEtNGRhMC1i/OWI0LTI3Yzk2YmMw/ODk4YQ', // Path to icon
            sizes: '150x150',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/Cnh5AqQm-epaFMelTL7kiJOtxhI1pRoAuzHJflZCaMw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzliZDVkYTc4/LWE4MTItNGI1Yi05/MDkxLTMwN2JkM2Rk/YTk1ZQ', // Path to icon
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/UShkxvukQTeLtdY-eTct6QVhQ8OyBfVMu5dlG8XNQdw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VlOTI2OTQz/LWU2NjgtNDk1Ny04/NDdiLTg4OTNlZGQ4/NTU1Yw', // Path to icon
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://img.playbook.com/YVLlB8eio-tjbmcIXeAhLD6E5TMKEkHeCwCQLkAlXU8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyODlhNTI3/LWMxMDEtNDAyMi04/ODhhLTIxY2JhZjA4/NGUyZg', // Path to icon
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          }
        ],
        screenshots: [
          {
            src: 'https://i.imgur.com/vyaeYOc.png',
            sizes: '3072x1536',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Aplicativo para Desktop 💻',
          },
          {
            src: 'https://i.imgur.com/vyaeYOc.png',
            sizes: '3072x1536',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Aplicativo para Mobile 📳',
          },
        ] as MyScreenshot[]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^http:\/\/localhost:3000\/api\/dados/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 24 horas
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    host: 'localhost',
  },
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname,  'node_modules'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
