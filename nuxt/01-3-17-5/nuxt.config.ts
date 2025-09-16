import { mergeJs } from "./js-merge";

let num = 0

const csrVersion = process.env?.CRS_P_VERSION ?? Date.now().toString();

process.env.VITE_CRS_VERSION = csrVersion;

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
  },
  generate: {
    routes: [
      '/detail/1',
      '/detail/2',
    ]}
  //   primevue: {
  //     /* Configuration */
  //     options: {
  //       theme: {
  //         preset: Aura,
  //       },
  //     },
  //   },
});
