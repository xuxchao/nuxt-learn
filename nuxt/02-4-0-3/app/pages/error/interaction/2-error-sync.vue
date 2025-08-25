<template>
  <div>
    <h2> error1.vue </h2>
    <p>校验子组件 setup 同步错误</p>
    <p>parent 被 NuxtErrorBoundary 包裹</p>
    <p>children 被 NuxtErrorBoundary 包裹</p>
    <h2>结果</h2>
    <ul>
      <li>
        <ul>
          <li>客户端触发: NuxtErrorBoundary 会层层上报，哪一层捕获了哪一层会处理</li>
          <li>NuxtErrorBoundary 都没处理会到 errorHandler 处理, 并且也会触发 vue:error</li>
          <li>errorHandler 没处理会触发 error.vue 页面, 并且也会触发 vue:error 和 app:error</li>
        </ul>
      </li>
    </ul>
    <Error1Children />
  </div>
</template>

<script setup lang="ts">
import Error1Children from "../components/interaction-children.vue";
</script>
