<template>
  <div>
    <h1 text="red-300 24px" bg="green-300">Home</h1>
    {{ num }}
    <button class="bg-red-500 p-1" text="red-700" p="x-4 y-1" @click="num++">+</button>
  </div>
</template>

<script setup lang="ts">
const num = ref(0);
</script>