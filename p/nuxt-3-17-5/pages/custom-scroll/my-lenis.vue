<template>
    <div class="container">
        <div class="content">
            <div class="item" v-for="item in 100" :key="item">{{ item }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {

    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end; // 对两个值进行线性插值 (0 <= amt <= 1)


    class Silky {
        content: HTMLElement
        timeRecord = 0 // 回调时间记录
        targetScroll = 0 // 当前滚动位置
        animatedScroll = 0 // 动画滚动位置
        from = 0 // 记录起始位置
        to = 0 // 记录目标位置
        lerp = 0.1 // 插值系数
        onUpdate: (value: number) => void = (value) => {
            this.animatedScroll = value; // 记录动画距离
            this.content.scrollTop = this.animatedScroll; // 设置滚动
            this.targetScroll = value; // 记录滚动后的距离
        }
        constructor({ content }: { content?: HTMLElement }) {
            this.content = content || document.documentElement
            const onWeel = (e: WheelEvent) => {
                e.preventDefault(); // 阻止默认事件，停止滚动
                this.onVirtualScroll(this.targetScroll + e.deltaY);
            }
            this.content.addEventListener('wheel', onWeel, { passive: false });
        }
        raf(time: number) {
            const deltaTime = time - (this.timeRecord || time);
            this.timeRecord = time;
            this.advance()
            // console.log(deltaTime * 0.001) // 单位转化为秒，该值后面计算时会用到
        }

        advance() {
            const value = lerp(this.targetScroll, this.to, this.lerp);
            console.log(this.targetScroll, this.to, value)
            // const value = this.to
            this.onUpdate?.(value);
        }

        onVirtualScroll(target: number) {
            this.to = target;
        }
    }



    const silky = new Silky({})

    function raf(time: number) {
        silky.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
})
</script>

<style>
.item {
    height: 100px;
}
</style>