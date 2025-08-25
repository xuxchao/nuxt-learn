export default defineNuxtPlugin((nuxtApp) => {
  // 捕获客户端渲染错误
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.error("vueApp.config.errorHandler:", error, context);
  };

  nuxtApp.hook("vue:error", (error) => {
    console.error("vue:error:", error);
  });

  nuxtApp.hook("app:error", (error) => {
    console.error("app:error:", error);
  });
});
