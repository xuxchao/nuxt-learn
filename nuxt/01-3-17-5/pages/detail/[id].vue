<template>
    <div>
        <h1>我是 detail 页面</h1>
        {{ id }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const id = route.params.id
</script>

<style scoped></style>