<template>
  <div>
    <h1>swr</h1>
  </div>
</template>

<script lang="ts" setup>
const counter = useSwr();
if (import.meta.server) {
  console.log(" swr我在服务端执行", counter.value, cache.swr);
  counter.value += 1;
  cache.swr += 1;
}
</script>
