// import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  routeRules: {
    "/prerender/prerender": {
      prerender: true,
    },
    "/prerender/isr": {
      isr: 60,
    },
    "/prerender/swr": {
      swr: 60,
    },
  },
  imports: {
    presets: [
      // 只会给 app 导入，不会给 server 导入
      {
        from: 'es-toolkit',
        imports: ['delay'],
      },
    ],
  },
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
