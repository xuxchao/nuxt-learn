<template>
  <div>
    <NuxtErrorBoundary>
      <h1> error1-children.vue </h1>
      <button @click="handleClick">
        点击 {{ num }}
      </button>
      <template #error>
        <h2>error1-children.vue 发生错误</h2>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
const num = ref(0);

const handleClick = () => {
  num.value++;
};

onMounted(() => {
  console.log("error1-children onMounted");
  throw Error("error1-children setup 发生错误");
});
</script>
