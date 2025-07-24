<template>
    <div>
        <h1>我是 defaul 布局</h1>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const name = computed(() => {
    return route.name
})
</script>
