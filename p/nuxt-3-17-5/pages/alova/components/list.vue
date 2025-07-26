<template>
    <div>
        <h1>Alova: {{ props.id }}</h1>
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in data" :key="item.id" :title="item.name" />
        </van-list>
    </div>
</template>

<script setup lang="ts">
import { alovaInstance } from '~/alova'
import { usePagination } from 'alova/client'

const props = defineProps<{
    id: number
}>()

const { data, page, loading, onSuccess } = usePagination(() => alovaInstance.Get<{ message: string, dataList: { id: number, name: string }[], total: number }>('/api/use-pagination'), {
    immediate: false,
    initialPage: 1,
    data: (data) => data.dataList,
    total: (data) => data.total,
    pageSize: 2
})
const finished = ref(false)



watch(page, (newPage) => {
    console.log('watch 查看当前页码', props.id, newPage)
})

onSuccess((res) => {
    console.log('onSuccess 查看当前页码', props.id, page.value)
    if (res.data.total <= data.value.length) {
        finished.value = true
    }
})


function onLoad() {
    console.log('onLoad 查看当前页码', props.id, page.value)
    page.value += 1
}

// onMounted(() => {
//     console.log('onMounted 查看当前页码', props.id, page.value)
// })

// onUnmounted(() => {
//     console.log('onUnmounted 查看当前页码', props.id, page.value)
// })



</script>