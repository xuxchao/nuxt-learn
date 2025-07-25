<template>
    <div>
        <h1>Alova</h1>
        <div v-for="item in arr" :key="item">
            <list :id="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import list from './components/list.vue'

const arr = ref([1, 2])




onActivated(() => {
    arr.value = arr.value.map(item => item * 2)
})



useLifeCycleLog()
</script>