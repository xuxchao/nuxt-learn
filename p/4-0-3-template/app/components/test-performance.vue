<template>
  <NuxtErrorBoundary>
    <div>
      <h1>Test Performance</h1>

      <h2>num: {{ num }}</h2>
      <button @click="numHandleClick">
        num++
      </button>
      <button @click="trueHandleClick">
        true
      </button>
      <div
        v-for="(i, index) in 1"
        :key="index"
        class="w-10 h-10 bg-red-500"
      >
        {{ i }} - {{ index }}
      </div>
    </div>
    <!-- 错误发生时显示的备用内容 -->
    <template #error="error">
      <div class="error">
        <h2> app.vue 发生错误</h2>
        <p>{{ error.error }}</p>
        <button @click="error.clearError()">
          重试
        </button>
      </div>
    </template>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
const num = ref(3);

const numHandleClick = () => {
  num.value++;
  throw Error("一个错误");
};

const trueHandleClick = () => {
  num.value++;
};

onMounted(() => {
  console.log("test-performance mounted");
  // throw Error("一个错误");
  showError("CUOLE");
  // throw createError({
  //   statusCode: 404,
  //   statusMessage: "Page Not Found",
  // });
});
</script>
