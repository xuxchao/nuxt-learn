<template>
    <!-- <NuxtLayout name="keep"> -->
        <div>我是 other-alive 页面</div>
    <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'keep',
})

defineOptions({
    name: 'other-alive-keep-alive'
})

onMounted(() => {
    console.log('other-alive 页面挂载')
})

onUnmounted(() => {
    console.log('other-alive 页面卸载')
})
</script>

<style scoped>

</style>