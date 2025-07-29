<template>
    <div>
        <h1>评价</h1>
        <p>链接地址: https://masonry.desandro.com/options</p>
        <p>也不能主动检测 dom 的改变，跟 vue 结合会不理想</p>
        <p>配置百分比比较麻烦，提前计算好会比较合适</p>
        <h2>优点</h2>
        <p>上手简单</p>
        <p>检测屏幕宽度变化有不错的动画效果</p>
        <div ref="masonry" class="masonry">
            <div class="masonry-item" v-for="(item, index) in data" :key="item.postId">
                <NuxtImg class="masonry-item-avatar" :src="item.avatar" />
                <div>{{ index }}</div>
                <div>{{ item.nickname }}</div>
                <div>{{ item.title }}</div>
            </div>
            <button @click="loadMore" class="load-more">加载下一页</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePagination, useRequest } from 'alova/client';
import { alovaInstance } from '~/alova';
import type { PostResult } from './type';


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

const isLoading = ref(false);
onSuccess(async () => {
    if (isLoading.value) return;
    isLoading.value = true;
    const { default: Masonry } = await import('masonry-layout');
    const _masonry = new Masonry(masonry.value!, {
        itemSelector: '.masonry-item',
        columnWidth: 200,
        gutter: 10,
        transitionDuration: '0.8s'
    });
});

const loadMore = () => {
    page.value++;
}


onMounted(async () => {

})

</script>

<style scoped>
.masonry {
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; */
}

.masonry-item {
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