<template>
    <!-- <NuxtLayout name="keep"> -->
        <div>我是 default-alive 页面</div>
    <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'default',
})

defineOptions({
    name: 'keep-alive-default-alive'
})

onMounted(() => {
    console.log('default-alive 页面挂载')
})

onUnmounted(() => {
    console.log('default-alive 页面卸载')
})
</script>

<style scoped></style>