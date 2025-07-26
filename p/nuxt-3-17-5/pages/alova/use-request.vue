<template>
    <div>
        <h1>Alova</h1>
        <p>{{ data?.message }}</p>
    </div>
</template>

<script setup lang="ts">
import { alovaInstance } from '~/alova' 
import { useRequest } from 'alova/client'

const { data } = useRequest(alovaInstance.Get<{ message: string }>('/api/hello'), {
    immediate: true
})

console.log('查看 alova 数据', data.value)
</script>