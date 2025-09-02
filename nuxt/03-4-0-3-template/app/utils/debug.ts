// 后续可以通过 npm 按照包别名的方式处理
// yarn add debug-v2@npm:debug@4
// import debug from "debug-v4";
import debug from "debug";

export const debugPages = debug("pages");

// 默认是 debug 界别日志。这里可以改成 console.log 日志
// debugPages.log = console.log;

export const debugPagesHome = debugPages.extend("home");

// debugPagesHome.enabled = true;

if (import.meta.client) {
  // 控制哪些 debug 启用
  //   localStorage.debug = "pages:*,pages";

  // 可以结合第三方工具上报到服务端
  //   debugPages.log = function (...args) {
  //     console.log(...args);
  //   };
}
