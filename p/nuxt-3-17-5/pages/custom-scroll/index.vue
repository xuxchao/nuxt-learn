<template>
  <div class="">
    <FixedContainer position="top">
      <pre>{{ touch }}</pre>
      <pre>{{ touch.cacheY * touch.speed }}</pre>
    </FixedContainer>
    <div ref="topContainerRef" class="top p-2">
      <div style="display: flex; gap: 8px; flex-direction: column;">
        <Card1 v-for="item in 10" />
      </div>
      <div class="h-[210px]"></div>
    </div>
    <div ref="bottomContainerRef" class="h-screen z-10 fixed left-0 right-0" :style="bottomContainerStyle">
      <BottomContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { createAnimatable } from "animejs";
import { type CSSProperties, ref } from "vue";
import BottomContainer from "./components/bottom/container.vue";
import FixedContainer from "./components/FixedContainer.vue";
import Card1 from "./components/top/card1.vue";

definePageMeta({
  layout: "white",
});

const isBottomDown = ref(false);

const topContainerRef = ref<HTMLDivElement>();
const bottomContainerRef = ref<HTMLDivElement>();

const bottomContainerStyle = computed<CSSProperties>(() => {
  let top = "100px";
  if (isBottomDown.value) {
    top = `calc(100vh - 200px)`;
  }

  return {
    top,
    transform: `translateY(${touch.value.cacheY * touch.value.speed}px)`,
    "overflow-y": "hidden",
  };
});

const touch = ref<{
  status: "start" | "end";
  startY: number;
  startEle: undefined | HTMLElement;
  y: number;
  cacheY: number;
  direction: undefined | "up" | "down";
  speed: number;
}>({
  status: "end",
  startY: 0,
  startEle: undefined as undefined | HTMLElement,
  y: 0,
  cacheY: 0,
  direction: undefined,
  speed: 1
});

watch(
  () => touch.value.status,
  (newVal) => {

    // nextTick(() => {
    //   if (newVal === "start") {
    //     if (!touch.value.startEle) return;
    //     // 看看下面的元素是不是 bottomContainerRef 的子元素
    //     if (bottomContainerRef.value?.contains(touch.value.startEle) && touch.value.direction === 'down') {
    //       isBottomDown.value = true;
    //     }
    //   }
    // })
  },
);

onMounted(() => {
  let animatable = createAnimatable(touch.value, {
    cacheY: 0,
    duration: 300,
    // easing: "ease",
  });

  let a = 0
  let b = 0

  // 监听用户的手指触摸事件
  window.addEventListener("touchstart", (e) => {
    b = e.touches[0].clientY;
    console.log('touchstart', e.touches[0].clientY)
    touch.value.startEle = e.target as HTMLElement;
    touch.value.status = "start";
  });

  // 监听用户的手指移动事件
  window.addEventListener("touchmove", (e) => {
    a = e.touches[0].clientY - b;
    b = e.touches[0].clientY;
    // console.log('touchmove', touch.value.y, e.touches[0].clientY)
    console.log('touchmove', a)
    if (touch.value.y > 0) {
      touch.value.direction = 'down'
    } else {
      touch.value.direction = 'up'
    }
    touch.value.cacheY = a + touch.value.cacheY;
    // animatable.cacheY(a + touch.value.cacheY);
  });

  // 监听用户的手指抬起事件
  window.addEventListener("touchend", (e) => {
    touch.value.status = "end";
    touch.value.direction = undefined;
    touch.value.startEle = undefined;
  });
});
</script>


<style>
body {
  background-color: #6D5F8D;
  overflow: hidden;
}
</style>