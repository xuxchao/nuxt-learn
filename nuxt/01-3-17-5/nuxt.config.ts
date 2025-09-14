import { mergeJs } from "./js-merge";

let num = 0

export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    '@unocss/nuxt',
    '@vueuse/nuxt',
    // "@primevue/nuxt-module"
  ],
  vite: {
    build: {
      rollupOptions: {
        // output: {
        //   manualChunks: (id, {getModuleIds,getModuleInfo }) => {
        //     const info = getModuleInfo(id);
        //     if (!info) return null;
        //     return mergeJs(id, info)
        //   }
        // }
      }
    }
  }
  //   primevue: {
  //     /* Configuration */
  //     options: {
  //       theme: {
  //         preset: Aura,
  //       },
  //     },
  //   },
});
