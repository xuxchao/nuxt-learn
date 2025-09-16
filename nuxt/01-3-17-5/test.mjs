import { createTemplateGeneration } from "mta-nuxt-template";

/**
 * 生成静态文件
 */
async function main() {
  // 具体参数信息看下面的 CreateTemplateGenerationOption 定义
  const templateObj = createTemplateGeneration({});
  const result = await templateObj({ path: "/detail/3" });
  if (result) {
    console.log("成功");
    return;
  }
  console.log("失败");
}

main();
