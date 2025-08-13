<template>
    <div id="scrollContainer" class="overflow-hidden h-screen">
        <!-- 可滚动内容容器 -->
        <!-- 实际滚动内容 -->
        <div id="scrollContent" class="scroll-content bg-light">
            <!-- 头部 -->
            <div class="bg-primary text-white p-5 relative">
                <h2 class="text-xl font-bold">探索页面</h2>
                <p class="text-sm opacity-90 mt-1">向上滑动查看更多内容</p>
            </div>

            <!-- 内容区域 -->
            <div class="p-4">
                <div v-for="(card, index) in cards" :key="index"
                    class="bg-white rounded-xl shadow-md p-4 mb-4 transform transition hover:shadow-lg">
                    <img :src="card.image" :alt="card.alt" class="w-full h-48 object-cover rounded-lg mb-3" />
                    <h3 class="font-bold text-lg">{{ card.title }}</h3>
                    <p class="text-gray-600 text-sm">{{ card.description }}</p>
                </div>
            </div>

            <!-- 底部 -->
            <div class="bg-dark text-white p-4 text-center text-sm">
                <p>已经到底啦！</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Lenis from 'lenis'

// 卡片数据
const cards = ref([
    {
        image: 'https://picsum.photos/300/200?random=1',
        alt: '风景图片1',
        title: '自然风光',
        description: '探索大自然的美丽景色，感受大自然的魅力与力量。'
    },
    {
        image: 'https://picsum.photos/300/200?random=2',
        alt: '城市建筑图片',
        title: '城市建筑',
        description: '现代都市的建筑风格，展现人类文明的进步与创造力。'
    },
    {
        image: 'https://picsum.photos/300/200?random=3',
        alt: '海洋生物图片',
        title: '海洋世界',
        description: '神秘的海底世界，蕴藏着无数未知的生物与秘密。'
    },
    {
        image: 'https://picsum.photos/300/200?random=4',
        alt: '山脉图片',
        title: '壮丽山脉',
        description: '高耸入云的山脉，见证着地球亿万年的变迁。'
    },
    {
        image: 'https://picsum.photos/300/200?random=5',
        alt: '森林图片',
        title: '茂密森林',
        description: '郁郁葱葱的森林，是地球上最重要的生态系统之一。'
    }
])

onMounted(() => {
    const lenis = new Lenis({
        autoRaf: true,
        wrapper: document.getElementById('scrollContainer') as HTMLElement
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
        console.log(e);
    });
})
</script>