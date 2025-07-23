<template>
    <!-- <NuxtLayout name="keep"> -->
        <div>我是 keep-alive 页面</div>
    <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'keep',
})

onMounted(() => {
    console.log('keep-alive 页面挂载')
})

onUnmounted(() => {
    console.log('keep-alive 页面卸载')
})
</script>

<style scoped>

</style>