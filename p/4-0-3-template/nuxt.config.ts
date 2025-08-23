// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "nuxt-vite-legacy", // "nuxt-swiper",
    "motion-v/nuxt",
    "@nuxt/eslint",
  ],
  legacy: {
    targets: ["chrome 49"],
    // additionalLegacyPolyfills: [
    //   "mdn-polyfills/Element.prototype.getAttributeNames",
    // ],
  },
  eslint: {
    config: {
      stylistic: true // <---
    }
  },
  css: [
    //
  ],
  vite: {
    build: {
      minify: false,
    },
  },
  sourcemap: {
    server: true,
    client: false,
  },
});
