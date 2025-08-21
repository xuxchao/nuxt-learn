<template>
    <div class="">
      <FixedContainer position="top">
        <pre>{{ topScroll }}</pre>
        <pre>{{ topChildrenSize }}</pre>
        <pre>{{ bottomStyle }}</pre>
      </FixedContainer>
      <div ref="topContainerRef" class="p-3 max-h-screen overflow-y-auto">
        <div ref="topChildrenRef" style="display: flex; gap: 8px; flex-direction: column;">
          <Card1 :index="item" v-for="item in 10" />
        </div>
        <div class="h-[50vh]"></div>
        <div class="h-[50vh]"></div>
        <div ref="bottomContainerRef" class="h-screen fixed z-10 left-0 right-0 overflow-y-auto" :style="bottomStyle">
          <BottomContainer />
        </div>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import BottomContainer from "./components/bottom/container.vue";
  import FixedContainer from "./components/FixedContainer.vue";
  import Card1 from "./components/top/card1.vue";
  import { ref, onMounted } from 'vue';
  import Lenis from 'lenis'
import { useWindowSize } from '@vueuse/core';
  
  definePageMeta({
    layout: "white",
  });

  const topContainerRef = ref<HTMLElement | null>(null)
  const bottomContainerRef = ref<HTMLElement | null>(null)
  const topChildrenRef = ref<HTMLElement | null>(null)
  const windowSize = useWindowSize()
  const topChildrenSize = useElementSize(topChildrenRef)
  const topScroll = ref(0)
  const bottomStyle = computed(() => {
      let top =  windowSize.height.value === Infinity ? '50vh' : `${windowSize.height.value / 2}px`;

      // 滚动到 top 有效内容的最底部
      if(topScroll.value > topChildrenSize.height.value - windowSize.height.value / 2) {
        // 修改 bottom 的位置向上移动
        top = ((windowSize.height.value / 2) - (topScroll.value - (topChildrenSize.height.value - windowSize.height.value / 2 + 24))) + 'px'
      }
    return {
        top
    }
  })

  onMounted(() => {

    const scroll = {
        time: 0,
    }

    document.documentElement.addEventListener('wheel', (e) => {
        console.log(e.timeStamp - scroll.time)
        scroll.time = e.timeStamp;
    })

    return;
      if (!topContainerRef.value || !bottomContainerRef.value) return




  const topLenis = new Lenis({
    autoRaf: true,
    // smoothWheel: false,
    // duration: 0.5,
    wrapper: topContainerRef.value,
  })

  const bottomLenis = new Lenis({
    autoRaf: true,
    smoothWheel: false,
    // duration: 0.5,
    wrapper: bottomContainerRef.value,
  })
  
  // 初始状态：只有 top 是活跃的
  bottomLenis.stop()

  let isTransitioning = false // 防止重复切换

  topLenis.on('scroll', (e) => {
    if (isTransitioning) return
    topLenis.options.smoothWheel = false;
    topScroll.value = e.scroll
    
    if (e.progress === 1 && e.direction === 1) {
      console.log('暂停 top，开始 bottom', e.progress, e.direction)
      isTransitioning = true
      
      // 确保完全停止 top
      topLenis.stop()
      
      bottomLenis.start()
      isTransitioning = false
    }
  })

  bottomLenis.on('scroll', (e) => {
    if (isTransitioning) return
    
    if (e.progress === 0 && e.direction === -1) {
      console.log('暂停 bottom，开始 top', e.direction)
      isTransitioning = true
      
      // 确保完全停止 bottom
      bottomLenis.stop()
      // 延迟启动 top，确保 bottom 完全停止
      setTimeout(() => {
        topLenis.start()
        isTransitioning = false
      }, 50)
    }
  })
})
  </script>
  
  
  <style>
  body {
    background-color: #6D5F8D;
    overflow: hidden;
  }
  </style>