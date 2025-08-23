// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "nuxt-vite-legacy",
    "motion-v/nuxt",
    // "nuxt-swiper",
  ],
  legacy: {
    targets: ["chrome 49"],
    // additionalLegacyPolyfills: [
    //   "mdn-polyfills/Element.prototype.getAttributeNames",
    // ],
  },
  // css: ["~/assets/styles/daisyui.css"],
  css: [
    // "@unocss/reset/tailwind.css",
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
