import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectManifest: "auto",
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches: false
      },
      manifest: {
        "name": "Cookeasy",
        "short_name": "Cookeasy",
        "theme_color": "#ef21f3",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icons": [
          {
              "src": "/icons/icon-72x72.png",
              "sizes": "72x72",
              "type": "image/png",
              "purpose": "any"
          },
          {
              "src": "/icons/icon-96x96.png",
              "sizes": "96x96",
              "type": "image/png",
              "purpose": "any"
          },
          {
              "src": "/icons/icon-128x128.png",
              "sizes": "128x128",
              "type": "image/png",
              "purpose": "any"
          },
          {
              "src": "/icons/icon-144x144.png",
              "sizes": "144x144",
              "type": "image/png",
              "purpose": "any"
          },
          {
              "src": "/icons/icon-152x152.png",
              "sizes": "152x152",
              "type": "image/png",
              "purpose": "any"
          },
          {
              "src": "/icons/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png",
              "purpose": "any"
          },
          {
              "src": "/icons/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png",
              "purpose": "any"
          },
          {
              "src": "/icons/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png",
              "purpose": "any"
          }
        ]
      }
    })
  ],
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    }
  }
})
