// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "nuxt-vite-legacy", // "nuxt-swiper",
    "motion-v/nuxt",
    "@nuxt/eslint",
  ],
  devtools: { enabled: true },
  css: [
    //
  ],
  sourcemap: {
    server: true,
    client: false,
  },
  compatibilityDate: "2025-07-15",
  vite: {
    build: {
      minify: false,
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
      },
    },
  },
  legacy: {
    targets: ["chrome 49"],
    // additionalLegacyPolyfills: [
    //   "mdn-polyfills/Element.prototype.getAttributeNames",
    // ],
  },
});
