<template>
    <!-- <div ref="masonry" data-masonry='{ "columnWidth": 200, "itemSelector": ".grid-item" }'> -->
    <div>
        <h1>纯 css 的 flex 布局</h1>
        <h2>优点</h2>
        <p>用起来比较简单的库，性能高</p>
        <h2>缺点</h2>
        <p>需要先给父容器设置高度，是从上到下的布局方式</p>
        <ClientOnly>
            <div class="masonry">
                <div class="masonry-item" v-for="item in data" :key="item.postId">
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
});

const loadMore = () => {
    page.value++;
}


onMounted(async () => {

})

</script>

<style scoped>
.masonry {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 1300px;
}

.masonry-item {
    border: 1px solid #ccc;
    padding: 10px;
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