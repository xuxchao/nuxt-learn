<template>
    <div class="flex">
        <div ref="leftRef" class=" flex-1 h-[100vh] overflow-y-auto">
            <div v-for="item in 100" :key="item" :class="`index-${item}`" class="h-[100px]">{{ item }}</div>
        </div>
        <div ref="rightRef" class=" flex-1 h-[100vh] overflow-y-auto">
            <div v-for="item in 100" :key="item" :class="`index-${item}`" class="h-[100px]">{{ item }}</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import Lenis from "lenis";

import { onMounted, ref } from "vue";

let lenis: Lenis;
const leftRef = ref<HTMLDivElement>();
const rightRef = ref<HTMLDivElement>();

onMounted(() => {
    lenis = new Lenis({
        autoRaf: true,
        wrapper: leftRef.value,
    });
    const lenisRight = new Lenis({
        autoRaf: true,
        wrapper: rightRef.value,
    });

    lenis.on("scroll", (e) => {
        console.log('left');
    });
    lenisRight.on("scroll", (e) => {
        console.log('right');
    });

});

function event() {
    // window.addEventListener("scroll", () => {
    //     console.log("scroll");
    // })
    window.addEventListener("wheel", (e) => {
        console.log("wheel");
    });

    window.addEventListener("touchstart", (e) => {
        console.log("touchstart");
    });
    window.addEventListener("touchmove", (e) => {
        console.log("touchmove");
    });
    window.addEventListener("touchend", (e) => {
        console.log("touchend");
    });
    window.addEventListener("touchcancel", (e) => {
        console.log("touchcancel");
    });
}

function lenisEvent() {
    lenis.on("scroll", (e) => {
        // 有点像滚动的距离
        // console.log('lenis scroll', e.animatedScroll, e.scroll, e.targetScroll);
        // 浏览器的滚动距离，和 animatedScroll 有点偏差
        // console.log(e.actualScroll)
        // 包含了容器的宽高和滚动距离的宽高
        // console.log(e.dimensions)
        // 处理了用户的默认参数
        // console.log(e.options)
        // 每次间隔的时间叠加
        // console.log(e.time)
        // 有三个值 false native smooth
        // false 停止
        // native 手指触摸
        // smooth 鼠标滚轮
        // console.log(e.isScrolling)
        // 最大滚动值
        // console.log(e.limit)
        // console.log(e)
    });

    lenis.on("virtual-scroll", (e) => {
        // 滚动速度
        console.log(e.deltaY);
    });
}
</script>
