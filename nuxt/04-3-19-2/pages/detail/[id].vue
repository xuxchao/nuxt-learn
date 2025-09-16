<template>
    <div>
        <h1>我是 detail- {{ id }}</h1>
        <p>{{ data?.data?.manufacturer }}</p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const id = route.params.id

const { data } = await useAsyncData(() => {
    return $fetch<{
        data: {
            manufacturer: string;
        }
    }>(`https://api.233lyly.com/game/v1/info/extra/v3-web?gameId=607991`)
})

if(id === '5') {
    process.exit(1)
}
</script>