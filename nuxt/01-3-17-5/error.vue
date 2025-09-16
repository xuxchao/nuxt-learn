<template>
    <div>
        <h1>亲，访问到 error 页面了</h1>
    </div>
</template>

<script setup lang="ts">

useHead({
    script: [
        {
            innerHTML: `console.log('error 页面执行了一些代码')`
        }
    ]
})
</script>

<style scoped></style>