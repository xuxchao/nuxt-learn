<template>
    <div>
        <h1>评价</h1>
        <p>默认情况局限性很大，必须现有元素再加载脚本，否则不生效。不会动态监测 dom 的添加</p>
        <p>主动对原有的 parent dom 下面的chidren dom 进行了重新生成。也会导致原有的 vue 响应式失去效果</p>
        <p>不能够结合 scope，否则 column 的类会没有作用</p>
        <p>生成的流不理想</p>
        <p>链接地址: https://docs.muuri.dev/examples.html</p>
        <div class="masonry" data-columns>
            <div class="masonry-item-content" v-for="(item, index) in data" :key="item.postId">
                <NuxtImg class="masonry-item-avatar" :src="item.avatar" />
                {{ index }}
                <div>{{ item.nickname }}</div>
                <div>{{ item.title }}</div>
            </div>
        </div>
        <button @click="loadMore" class="load-more">加载下一页</button>
    </div>
</template>

<script setup lang="ts">
import { usePagination, useRequest } from 'alova/client';
import { alovaInstance } from '~/alova';
import type { PostResult } from './(type)';

// useHead({
//     script: [
//         {
//             src: '/salvattore.js',
//             defer: true
//         }
//     ]
// });

onMounted(() => {

})

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

const isLoading = ref(false);

onSuccess(async () => {
    if (isLoading.value) return;
    isLoading.value = true;

    setTimeout(() => {
        const script = document.createElement('script');
        script.src = '/salvattore.js';
        document.body.appendChild(script);
    }, 1000)
});

const loadMore = () => {
    page.value++;
}


</script>

<style>
.masonry[data-columns]::before {
    content: '3 .column.size-1of3';
}

.column {
    float: left;
}

.size-1of3 {
    width: 33.333%;
}


.masonry-item-content {
    border: 1px solid #ccc;
    padding: 10px;
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