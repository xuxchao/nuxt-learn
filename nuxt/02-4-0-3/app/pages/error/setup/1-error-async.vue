<template>
  <div>
    <h2> error1.vue </h2>
    <p>校验子组件 setup 同步错误</p>
    <p>parent 被 NuxtErrorBoundary 包裹</p>
    <p>children 被 NuxtErrorBoundary 包裹</p>
    <h2>结果</h2>
    <ul>
      <li>服务端触发: vue:error</li>
      <li>客户端: 直接进入 error.vue 页面</li>
    </ul>
    <NuxtErrorBoundary>
      <LazyError1Children />
      <template #error>
        <h2>error1-children.vue 发生错误</h2>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
// import { hydrateOnInteraction } from "vue";

// 坑1: 使用 defineLazyHydrationComponent 时，会找不到 page/**/components 目录下的组件
const LazyError1Children = defineAsyncComponent({
  loader: () => import("../components/setup-error1-children.vue"),
  // hydrate: hydrateOnInteraction("click"),
});
</script>
