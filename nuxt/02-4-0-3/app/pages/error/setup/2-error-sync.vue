<template>
  <div>
    <h2> error1.vue </h2>
    <p>校验子组件 setup 同步错误</p>
    <p>children 被 NuxtErrorBoundary 包裹</p>
    <h2>结果</h2>
    <ul>
      <li>服务端触发: vue:error</li>
      <li>客户端: 直接进入 error.vue 页面</li>
    </ul>
    <Error1Children />
  </div>
</template>

<script setup lang="ts">
import Error1Children from "../components/setup-error1-children.vue";
</script>
