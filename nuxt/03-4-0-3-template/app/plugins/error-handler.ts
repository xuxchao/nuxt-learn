export default defineNuxtPlugin((nuxtApp) => {
  // vue 错误捕获：只在客户端生效
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.error("vueApp.config.errorHandler:", error, context);
  };

  // 应用启动错误，客户端，服务端渲染错误，交互错误
  nuxtApp.hook("vue:error", (error) => {
    console.error("vue:error:", error);
  });

  // 应用启动错误，客户端，服务端渲染错误
  nuxtApp.hook("app:error", (error) => {
    console.error("app:error:", error);
  });
});
