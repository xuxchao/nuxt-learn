import mitt from 'mitt'
import { VueMasonryPlugin } from "vue-masonry/src/masonry.plugin";


export default defineNuxtPlugin((nuxtApp) => {
    const app = nuxtApp.vueApp;
    app.config.globalProperties.emitter = mitt();
    app.use(VueMasonryPlugin);
});
