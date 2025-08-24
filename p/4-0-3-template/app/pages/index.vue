<template>
  <div>
    <test-performance />
    <NuxtErrorBoundary>
      <div>
        <h1>Hello World</h1>

        <div>
          <h2>num: {{ num }}</h2>
          <!-- <div class="h-[200vh]" /> -->
          <!-- <LazyHydrationMyComponent hydrate-on-interaction="mouseover" /> -->
          <!-- <test-performance hydrate-on-interaction="click" /> -->
          <!-- <lazy-test-performance hydrate-never /> -->
        </div>
      </div>
      <!-- 错误发生时显示的备用内容 -->
      <template #error="error">
        <div class="error">
          <h2>index.vue 发生错误</h2>
          <p>{{ error.error }}</p>
          <button @click="error.clearError()">
            重试
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
// const LazyHydrationMyComponent = defineLazyHydrationComponent(
//   "idle",
//   () => import("@/components/test-performance.vue"),
// );

const num = ref(0);

useHead({
  script: [
    {
      innerHTML: `console.log("sync start", window.performance.now(), window.performance.timeOrigin);`,
      // 放在 body 最下面
      tagPosition: "bodyClose",
    },
    {
      src: "/time.js",
      async: true,
      defer: true,
    },
  ],
});

if (import.meta.client) {
  console.log("start", window.performance.now(), window.performance.timeOrigin);
}
onMounted(() => {
  console.log("end", window.performance.now(), window.performance.timeOrigin);
});
</script>
