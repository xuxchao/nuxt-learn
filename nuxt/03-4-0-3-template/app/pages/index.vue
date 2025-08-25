<template>
  <div>
    <h1> index.vue </h1>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  debugPagesHome("index.vue", "test", "test2", "test3", { a: 1 });
});
</script>
