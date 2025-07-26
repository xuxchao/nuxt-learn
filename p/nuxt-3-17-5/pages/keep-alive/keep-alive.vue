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
  layout: 'default',
})

useLifeCycleLog()

</script>

<style scoped>

</style>