export default defineNuxtPlugin((nuxtApp) => {
  // 捕获客户端渲染错误
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.error("全局错误捕获:", error, context);
    // 可在这里发送错误到监控服务（如 Sentry）
  };

  // 捕获服务器端错误（仅在服务端执行）
  nuxtApp.hook("vue:error", (error) => {
    console.error("服务器端错误:", error);
  });
});
