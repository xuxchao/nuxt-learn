<template>
  <div>
    <h1>Hello World</h1>
    <NuxtPage />
    <NuxtErrorBoundary>
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
  </div>
</template>

<script lang="ts" setup>
</script>
