<template>
    <div>
        <h1>use-async-data</h1>
        <div v-if="pending">loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
            <pre>{{ data }}</pre>
        </div>
        <button type="button" @click="refreshHandler">刷新</button>
    </div>
</template>

<script setup lang="ts">

// 加不加 await 服务端都会同步等待结果
// 加了 await 客户端会等待接口完成在跳转页面
const { data, refresh, pending,error } = await useAsyncData('use-async-data',  () => {
    // await delay(5000)
    // throw createError({
    //     statusCode: 500,
    //     message: '服务器错误1',
    // })
  return $fetch('/api/hello')
}, {
    // 不加 await 的情况没有任何区别
    // 加了 await 的情况下，vue 的 Suspense 组件不会等待接口完成
    lazy: true,
})

if(import.meta.server) {
    console.log('页面服务端渲染')
}

const refreshHandler = async () => {
    await refresh()
    console.log('我重新刷新了')
}


</script>
