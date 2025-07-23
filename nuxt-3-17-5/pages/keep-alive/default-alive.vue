<template>
    <div>我是 default-alive 页面</div>
</template>

<script setup lang="ts">

onMounted(() => {
    console.log('default-alive 页面挂载')
})

onUnmounted(() => {
    console.log('default-alive 页面卸载')
})
</script>

<style scoped>

</style>