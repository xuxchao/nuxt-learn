import { createTemplateGeneration } from "mta-nuxt-template";
import * as cheerio from 'cheerio'

/**
 * 生成静态文件
 */
async function main() {
  // 具体参数信息看下面的 CreateTemplateGenerationOption 定义
  const templateObj = createTemplateGeneration({});
  const result = await templateObj({ path: "/detail/5" });
  if (result) {
    console.log("成功");
    return;
  }
  console.log("失败");
}

// main();


function main1() {
  const $ = cheerio.load("<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<script type=\"importmap\">{\"imports\":{\"#entry\":\"/_nuxt/DyKWvRWx.js\"}}</script>\n<link rel=\"preload\" as=\"fetch\" crossorigin=\"anonymous\" href=\"/image/_payload.json?d3249de0-c6aa-4ad7-bd22-e93d692197e4\">\n<link rel=\"modulepreload\" as=\"script\" crossorigin href=\"/_nuxt/DyKWvRWx.js\">\n<link rel=\"modulepreload\" as=\"script\" crossorigin href=\"/_nuxt/YQ7I6qC7.js\">\n<link rel=\"preload\" as=\"fetch\" fetchpriority=\"low\" crossorigin=\"anonymous\" href=\"/_nuxt/builds/meta/d3249de0-c6aa-4ad7-bd22-e93d692197e4.json\">\n<link rel=\"prefetch\" as=\"script\" crossorigin href=\"/_nuxt/DcXyNeY9.js\">\n<link rel=\"prefetch\" as=\"script\" crossorigin href=\"/_nuxt/Ec2mZwbq.js\">\n<link rel=\"prefetch\" as=\"script\" crossorigin href=\"/_nuxt/B-TSUd4b.js\">\n<link rel=\"prefetch\" as=\"image\" type=\"image/png\" href=\"/_nuxt/download-bg.CVPN_JXa.png\">\n<link rel=\"prefetch\" as=\"image\" type=\"image/png\" href=\"/_nuxt/download.iL5CH5IR.png\">\n<script type=\"module\" src=\"/_nuxt/DyKWvRWx.js\" crossorigin></script>")
  $('link[as="image"]').remove()
  console.log($.html())
}

main1();