<template>
    <div>
    <!-- <NuxtLayout name="keep"> -->
        <div>我是 keep-alive 页面</div>
    <!-- </NuxtLayout> -->

    <NuxtLink to="/keep-alive/other-alive">跳转其他页面</NuxtLink>
</div>
     
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'keep',
})

defineOptions({
    name: 'keep-alive-keep-alive'
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