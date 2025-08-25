<template>
  <div>
    <h1> index.vue </h1>
  </div>
</template>

<script setup lang="ts">
onErrorCaptured((error) => {
  console.log(" index onErrorCaptured", error);
  return false;
});

console.log("index.vue");
</script>
