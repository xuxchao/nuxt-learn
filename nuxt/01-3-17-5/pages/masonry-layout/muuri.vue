<template>
    <div>
        <h1>评价</h1>
        <p>感觉不像是给瀑布流用的，看案例也更过的是其他的场景</p>
        <p>链接地址: https://docs.muuri.dev/examples.html</p>
        <div ref="masonry" class="masonry">
            <div class="masonry-item" v-for="item in data" :key="item.postId">
                <div class="masonry-item-content">
                    <NuxtImg class="masonry-item-avatar" :src="item.avatar" />
                    <div>{{ item.nickname }}</div>
                    <div>{{ item.title }}</div>
                </div>
            </div>
        </div>
        <button @click="loadMore" class="load-more">加载下一页</button>
    </div>
</template>

<script setup lang="ts">
import { usePagination, useRequest } from 'alova/client';
import { alovaInstance } from '~/alova';
import type { PostResult } from './(type)';


const { data, onSuccess, page, pageSize } = usePagination((page, pageSize) => alovaInstance.Post<{
    code: number;
    data: PostResult;
    message: string;
}>('/community/post/v1/query', {
    circleId: "159434984134260737e4d118647df8ad",
    pageNum: page,
    pageSize: pageSize
}), {
    append: true,
    data: (data) => {
        console.log('data', data);
        return data.data.dataList;
    },
    total: (data) => {
        console.log('total', data);
        return data.data.total;
    },
    initialData: {
        code: 0,
        data: {
            dataList: [],
            total: 0,
        }
    },
    initialPage: 1,
    initialPageSize: 20,
});

const masonry = ref<Element | null>(null);

onSuccess(async () => {
    // grid.refreshItems();
    grid?.add(document.querySelector('.masonry-item') as HTMLElement);
});

const loadMore = () => {
    page.value++;
}

let grid: Grid | null = null;
onMounted(async () => {
    const { default: Muuri } = await import('muuri');
    grid = new Muuri('.masonry', {
        items: '.masonry-item',
    });
})

</script>

<style scoped>
.masonry {
    position: relative;
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; */
}

.masonry-item {
    width: 200px;
    position: absolute;
}

.masonry-item-content {
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    box-sizing: border-box;
    margin-bottom: 10px;
}

.masonry-item-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.load-more {
    position: fixed;
    bottom: 0;
    left: 0;

}
</style>