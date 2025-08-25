import PrimeVue from "primevue/config";
import AnimateOnScroll from "primevue/animateonscroll";
import ConfirmationService from "primevue/confirmationservice";
import StyleClass from "primevue/styleclass";
import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
  });

  // Optional features
  //   nuxtApp.vueApp.directive("styleclass", StyleClass);
  //   nuxtApp.vueApp.directive("animateonscroll", AnimateOnScroll);
  //   nuxtApp.vueApp.use(ToastService);
  //   nuxtApp.vueApp.use(ConfirmationService);
});
