<template>
  <div id="scrollContainer" class="overflow-hidden h-screen">
    <!-- 可滚动内容容器 -->
    <!-- 实际滚动内容 -->
    <div id="scrollContent" :style="{ transform: `translateY(${currentY}px)` }" class="scroll-content bg-light">
      <!-- 头部 -->
      <div class="bg-primary text-white p-5 relative">
        <h2 class="text-xl font-bold">探索页面</h2>
        <p class="text-sm opacity-90 mt-1">向上滑动查看更多内容</p>
      </div>

      <!-- 内容区域 -->
      <div class="p-4">
        <div 
          v-for="(card, index) in cards" 
          :key="index"
          class="bg-white rounded-xl shadow-md p-4 mb-4 transform transition hover:shadow-lg"
        >
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
import { animate, JSAnimation} from 'animejs'

const currentY = ref(0) // 当前内容的Y位置

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
  const scrollContainer = document.getElementById("scrollContainer")!;
  const scrollContent = document.getElementById("scrollContent")!;

  // 滚动相关变量
  let startY = 0; // 触摸开始时的Y坐标
  let isDragging = false; // 是否正在拖动
  let animation: JSAnimation | null = null; // 存储动画实例
  let lastMoveTime = 0; // 最后一次移动的时间
  let lastMoveY = 0; // 最后一次移动的Y坐标
  let velocity = 0; // 滚动速度

  // 计算内容和容器高度
  const containerHeight = scrollContainer.clientHeight;
  const contentHeight = scrollContent.scrollHeight;
  const maxScroll = containerHeight - contentHeight; // 最大滚动距离（负值）

  // 触摸开始事件
  document.body.addEventListener(
    "touchstart",
    (e) => {
      // 停止任何正在进行的动画
      if (animation) {
        animation.pause();
      }

      // 记录初始位置和时间
      startY = e.touches[0].clientY;
      isDragging = true;
      lastMoveTime = Date.now();
      lastMoveY = startY;
      velocity = 0;

      // 添加视觉反馈
      scrollContent.style.transition = "none";
    },
    { passive: true }
  );

  // 触摸移动事件
  document.body.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;
      const currentTouchY = e.touches[0].clientY;
      const diff = currentTouchY - startY;
      let newY = currentY.value + diff;

      // 计算速度
      const currentTime = Date.now();
      const timeDiff = currentTime - lastMoveTime;
      if (timeDiff > 0) {
        velocity = (currentTouchY - lastMoveY) / timeDiff;
      }

      // 更新最后移动的位置和时间
      lastMoveY = currentTouchY;
      lastMoveTime = currentTime;

      // 更新位置
      // scrollContent.style.transform = `translateY(${newY}px)`;
      startY = currentTouchY;
      currentY.value = newY;
    },
    { passive: true }
  );

  // 触摸结束事件
  document.body.addEventListener(
    "touchend",
    () => {
      finishScroll();
    },
    { passive: true }
  );

  // 完成滚动，应用惯性
  function finishScroll() {
    isDragging = false;

    // 根据速度计算惯性滚动的目标位置
    const inertia = velocity * 100; // 惯性系数
    let targetY = currentY.value + inertia;

    // 限制在内容范围内
    if (targetY > 0) {
      targetY = 0;
    } else if (targetY < maxScroll) {
      targetY = maxScroll;
    }

    // 使用anime.js创建平滑的惯性滚动动画
    animation = animate(currentY,{
      value: targetY,
      duration: Math.abs(inertia) * 2, // 根据惯性距离调整动画时长
      easing: "easeOutQuad",
      // update: (anim) => {
      // },
      // complete: () => {
      //   console.log("complete", currentY, targetY);
      //   currentY.value = targetY;
      // },
    });
  }
})
</script>

<style scoped></style>