<template>
  <div>
    <h1> app.vue </h1>
    <div class="flex flex-col gap-3">
      <NuxtLink to="/about">关于</NuxtLink>
      <NuxtLink to="/hello">你好</NuxtLink>
      <NuxtLink to="/">首页</NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// onErrorCaptured((error) => {
//   console.log(" app.vue onErrorCaptured", error);
//   return false;
// });
</script>

<style>

</style>
