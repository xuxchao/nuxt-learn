<template>
  <div>
    <h3>我是children2组件</h3>
    <h4>当前计数：{{ count }}</h4>
    <button @click="handleClick">点我改变父组件的count值</button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
const nuxtApp = useNuxtApp()
const count = ref(0)
const handleClick = async () => {
  count.value++
  await nuxtApp.callHook('app:user:registered', {
    id: 1,
    name: 'John Doe',
  })

  

}



</script>

<style scoped></style>