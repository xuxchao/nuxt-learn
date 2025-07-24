<template>
    <!-- <NuxtLayout name="keep"> -->
        <div>我是 keep-alive 页面</div>
    <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'default',
})

useLifeCycleLog()

</script>

<style scoped>

</style>