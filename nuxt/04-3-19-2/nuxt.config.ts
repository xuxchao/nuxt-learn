// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  generate: {
    routes: [
      '/detail/1',
      '/detail/2',
    ]
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            console.log('manualChunks', id)
            return "vendor";
          }
        }
      }
    }
  }
})
