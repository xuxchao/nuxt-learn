<template>
        <div>
            <ul>
                <li v-for="(item, key) in list" :key="key">
                    <p>{{ key }}</p>
                    <ul>
                        <li v-for="subItem in item" :key="subItem">
                            <NuxtLink :to="`/${key}/${subItem}`">{{ subItem }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'default',
})

const router = useRouter()



const list = computed(() => {
    const paths = router.getRoutes().map(item => item.path)
    let obj: Record<string, string[]> = {}
    paths.forEach(item => {
        const paths = item.split('/')
        const [first, two, ...rest] = paths
        if (rest.length > 0) {
            if (obj[two]) {
                obj[two].push(rest.join('/'))
            } else {
                obj[two] = [rest.join('/')]
            }
        }
    })
    return obj
})

onMounted(() => {
    console.log('index 页面挂载')
})

onUnmounted(() => {
    console.log('index 页面卸载')
})

</script>

<style scoped></style>