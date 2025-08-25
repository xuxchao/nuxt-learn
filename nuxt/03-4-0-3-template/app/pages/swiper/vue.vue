<template>
  <vue-swiper
    class="bg-red"
    :space-between="50"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide class="!w-100">
      Slide 1
    </swiper-slide>
    <swiper-slide class="!w-100">
      Slide 2
    </swiper-slide>
    <swiper-slide class="!w-100">
      Slide 3
    </swiper-slide>
    <swiper-slide class="!w-100">
      Slide 4
    </swiper-slide>
    <swiper-slide class="!w-100">
      Slide 5
    </swiper-slide>
  </vue-swiper>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components

import type { Swiper } from "swiper";
import { SwiperSlide, Swiper as VueSwiper } from "swiper/vue";
import "swiper/css/bundle";

const onSwiper = (swiper: Swiper) => {
  console.log("onSwiper", swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style lang="css"></style>
