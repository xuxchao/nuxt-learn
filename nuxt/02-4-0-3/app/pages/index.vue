<template>
  <div>
    <h1>Home</h1>
    <div>
      <h2>num: {{ num }}</h2>
    </div>
    <div>
      <button class="
        hover:(bg-blue-400 text-white text-2xl)
        lg:(bg-blue-400 text-(red 8) p-(x2 y2))
        md:(bg-red-400 text-white)
      " @click="num++">num++</button> 
    </div>
  </div>
</template>

<script setup lang="ts">

const num = ref(0)
</script>
