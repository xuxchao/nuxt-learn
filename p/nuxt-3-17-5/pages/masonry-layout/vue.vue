<template>
    <!-- <div ref="masonry" data-masonry='{ "columnWidth": 200, "itemSelector": ".grid-item" }'> -->
    <div>
        <h1>评价</h1>
        <p>链接地址: https://www.npmjs.com/package/vue-masonry</p>
        <h2>优点</h2>
        <p>用起来比较简单的库，能够跟 vue 很好的结合起来</p>
        <h2>缺点</h2>
        <p>动画不理想</p>
        <p>关掉动画之后会出现闪烁问题</p>
        <ClientOnly>
            <div v-masonry transition-duration="0s" item-selector=".masonry-item" fit-width="true" class="masonry">
                <div v-masonry-tile class="masonry-item" v-for="item in data" :key="item.postId">
                    <NuxtImg class="masonry-item-avatar" :src="item.avatar" />
                    <div>{{ item.nickname }}</div>
                    <div>{{ item.title }}</div>
                </div>
            </div>
        </ClientOnly>
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
    if (!masonry.value) return;
    const { default: Masonry } = await import('masonry-layout');
    const _masonry = new Masonry(masonry.value, {
        itemSelector: '.masonry-item',
        columnWidth: 200,
        gutter: 10,
        stagger: 30,
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.masonry-item {
    border: 1px solid #ccc;
    padding: 10px;
    /* width: calc(25% - 8px); */
    width: 23%;
    box-sizing: border-box;
    margin-bottom: 10px;
    /* margin-right: 10px; */
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