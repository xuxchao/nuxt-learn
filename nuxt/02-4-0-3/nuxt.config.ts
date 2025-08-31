// import tailwindcss from "@tailwindcss/vite";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    // "@unocss/nuxt",
    "nuxt-vite-legacy", // "nuxt-swiper",
    "motion-v/nuxt",
    "@vant/nuxt",
    "@nuxt/eslint",
  ],
  legacy: {
    targets: ["chrome 49"],
    // additionalLegacyPolyfills: [
    //   "mdn-polyfills/Element.prototype.getAttributeNames",
    // ],
  },
  css: [
    //
    // "~/assets/styles/daisyui.css",
    "@unocss/reset/tailwind.css",
  ],
  vite: {
    build: {
      minify: false,
    },
    // plugins: [ tailwindcss()]
  },
  sourcemap: {
    server: true,
    client: false,
  },
});
