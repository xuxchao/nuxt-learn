<template>
  <div>
    <h1> index.vue </h1>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  // debugPagesHome("index.vue", "test", "test2", "test3", { a: 1 });
});
const counter = useState("indexvue", () => 1);
if (import.meta.server) {
  console.log("我在服务端执行", counter.value, cache.prerender);
  counter.value += 1;
  cache.prerender += 1;
}
</script>
