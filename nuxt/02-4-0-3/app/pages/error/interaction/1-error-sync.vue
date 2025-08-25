<template>
  <div>
    <h2> error1.vue </h2>
    <p>校验子组件 setup 同步错误</p>
    <p>parent 被 NuxtErrorBoundary 包裹</p>
    <p>children 被 NuxtErrorBoundary 包裹</p>
    <h2>结果</h2>
    <ul>
      <li>客户端触发: vue:error</li>
      <li>客户端: error1.vue NuxtErrorBoundary 捕获错误</li>
    </ul>
    <NuxtErrorBoundary>
      <Error1Children />
      <template #error>
        <h2>error1.vue NuxtErrorBoundary 捕获错误</h2>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import Error1Children from "../components/interaction-children.vue";
</script>
