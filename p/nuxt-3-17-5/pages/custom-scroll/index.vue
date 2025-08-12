<template>
  <div class="">
    <FixedContainer position="top">
      <pre>{{ touch }}</pre>
    </FixedContainer>
    <div ref="topRef" class="top p-2">
        <div style="display: flex; gap: 8px; flex-direction: column;">
            <Card1 v-for="item in 10" />
        </div>
        <div class="h-[210px]"></div>
    </div>
    <BottomContainer ref="bottomContainerRef" class="h-screen z-10 transition-all duration-300 fixed left-0 right-0" :style="bottomContainerStyle" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card1 from "./components/top/card1.vue";
import BottomContainer from "./components/bottom/container.vue";
import FixedContainer from "./components/FixedContainer.vue";
import { createAnimatable } from 'animejs';


definePageMeta({
  layout: 'white',
})

const isBottomDown = ref(false)

const topRef = ref<HTMLDivElement>()
const bottomContainerRef = ref<HTMLDivElement>()
const windowScroll = useWindowScroll()


const bottomContainerStyle = computed(() => {
  let top = '100px'
  if(isBottomDown.value) {
    top = `calc(100vh - 200px)`
  }

  return {
    top,
    'overflow-y': 'hidden',
  }

})

watch(() => windowScroll.y.value, (newVal) => {
  if(newVal > 0) {
    isBottomDown.value = true
  }
})

const touch = ref({
  status: 'end',
  startY: 0,
  y: 0
})



onMounted(() => {

  let animatable = createAnimatable(touch.value, {
    y: 0,
    duration: 300,
    easing: 'easeInOutQuad',
  })

  // setTimeout(() => {
  //   hasData.value = true
  // }, 1000)

  // 监听用户的手指触摸事件
  window.addEventListener('touchstart', (e) => {
    console.log('touchstart', e)
    touch.value.status = 'start'
    // touch.value.startY = e.touches[0].clientY
    animatable.y(e.touches[0].clientY - touch.value.startY)
  })

  // 监听用户的手指移动事件
  window.addEventListener('touchmove', (e) => {
    console.log('touchmove', e, e.touches[0])
    // touch.value.y = e.touches[0].clientY - touch.value.startY
    animatable.y( e.touches[0].clientY - touch.value.startY)
  })

  // 监听用户的手指抬起事件
  window.addEventListener('touchend', (e) => {
    console.log('touchend', e)
    touch.value.status = 'end'
  })

  // 监听用户的滚动事件
  // window.addEventListener('scroll', (e) => {
  //   console.log(e)
  // })
})

</script>


<style>
body {
    background-color: #6D5F8D;
    overflow: hidden;
}
</style>