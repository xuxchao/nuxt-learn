// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "nuxt-vite-legacy", // "nuxt-swiper",
    "motion-v/nuxt",
    "@nuxt/eslint",
  ],
  devtools: { enabled: true },

  app: {
    // pageTransition: { name: "slide-right", mode: "out-in" },

  },
  css: [
    //
    "@unocss/reset/tailwind.css",
    "@/assets/styles/transition.css",
  ],
  routeRules: {
    "/": {
      prerender: true,
    },
    "/isr": {
      isr: 60,
    },
    "/swr": {
      // swr: 60,
      static: true,
    },

  },
  sourcemap: {
    server: true,
    client: false,
  },

  experimental: {
    // viewTransition: true,
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
    checker: true,
  },
  legacy: {
    targets: ["chrome 49"],
    // additionalLegacyPolyfills: [
    //   "mdn-polyfills/Element.prototype.getAttributeNames",
    // ],
  },
});
