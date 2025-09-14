const prefix = "cache";
let num = 0;
const maxSize = 10; // kb
let currentSize = 0;

/**
 * 合并 js
 * @param id 模块 id
 * @param info 模块信息
 * @returns 合并后的 js 文件名
 */
export function mergeJs(id: string, info: { code: string | null }) {
  console.log("合并 js", id);
  if (!info.code) return null;
  const size = info.code.length / 1024;
  if (currentSize + size > maxSize) {
    return `${prefix}-${num++}.js`;
  }
  currentSize = 0;
  return null;
}
