<template>
  <ClientOnly>
    <swiper-container :slides-per-view="1" :loop="true">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: rgb(32, 233, 70); color: white;"
      >
        Slide {{ idx + 1 }}
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
const slides = ref(Array.from({ length: 10 }))
</script>

<style lang="css">
swiper-container {
  width: 100%;
  height: 20vh;
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>