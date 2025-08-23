import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp

  nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
});
