<template>
    <!-- <NuxtLayout name="keep"> -->
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
    <!-- </NuxtLayout> -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'keep',
})

const router = useRouter()



const list = computed(() => {
    const paths = router.getRoutes().map(item => item.path)
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
        }
    })
    return obj
})

</script>

<style scoped></style>