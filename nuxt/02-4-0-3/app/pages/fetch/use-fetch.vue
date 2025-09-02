<template>
    <div>
        <h1>use-async-data</h1>
        <div v-if="pending">loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
            <pre>{{ data }}</pre>
        </div>
        <button type="button" @click="refreshHandler">刷新</button>

        <hr>

        <Fetch />
    </div>
</template>

<script setup lang="ts">
import Fetch from './components/fetch.vue'


const { data, refresh, pending,error } = await useFetch('/api/hello')

if(import.meta.server) {
    console.log('页面服务端渲染')
}

const refreshHandler = async () => {
    await refresh()
    console.log('我重新刷新了')
}


</script>
