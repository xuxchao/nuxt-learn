<template>
  <div>
    <h1>isr</h1>
  </div>
</template>

<script lang="ts" setup>
const counter = useIsr();
if (import.meta.server) {
  console.log(" isr我在服务端执行", counter.value, cache.isr);
  counter.value += 1;
  cache.isr += 1;
}
</script>
