<template>
  <div>
    <h3>我是children1组件</h3>
    <h4>当前计数：{{ count }}</h4>
    <button @click="handleClick">点我改变父组件的count值</button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
const count = ref(0)
const handleClick = () => {
  count.value++
}

const nuxtApp = useNuxtApp()

nuxtApp.hook('app:user:registered', payload => {
  console.log('A new user has registered!', payload)
})

</script>

<style scoped>

</style>