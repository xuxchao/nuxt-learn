<template>
    <div class=" rounded-t-[12px] bg-white">
        <div class="grid grid-cols-2 gap-4 p-4">
            <Card1 v-for="item in 30" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card1 from "./card1.vue";
</script>
