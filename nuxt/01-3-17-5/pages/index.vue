<template>
    <!-- <NuxtLayout name="keep"> -->
    <div>
        <ul>
            <li v-for="(item, key) in list" :key="key">
                <template v-if="item.length > 0">
                    <p>{{ key }}</p>
                    <ul>
                        <li v-for="subItem in item" :key="subItem">
                            <NuxtLink :to="`/${key}/${subItem}`">{{ subItem }}</NuxtLink>
                        </li>
                    </ul>
                </template>
                <template v-else-if="key">
                    <NuxtLink :to="`/${key}`">{{ key }}</NuxtLink>
                </template>
            </li>
        </ul>
    </div>
    <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

definePageMeta({
    layout: 'default',
})

const version = import.meta.env.VITE_CRS_VERSION

useLifeCycleLog()

const router = useRouter()



const list = computed(() => {
    const paths = router.getRoutes().map(item => item.path)
    console.log('paths', paths.length)
    // 我的路由是 /a/b /a/c 的格式，我需要处理成 { [a]: [b, c]} 的格式
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
        } else if(two) {
            // console.log('paths2', 'first: ' + first, 'two:' + two, 'rest:' + rest)
            obj[two] = []
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