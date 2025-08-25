<template>
    <div>
        <InputText v-model="msg" />

        <p>你输入的内容是: {{ msg }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('')
</script>