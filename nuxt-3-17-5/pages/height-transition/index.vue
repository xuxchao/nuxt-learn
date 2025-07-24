<template>
    <div style="height: 200vh">
        <h1>高度支持过度效果</h1>

        <p>我有一个容器，初始大小是 100px * 200px</p>
        <p>我单击 button 后会改成 100px * 300px, 再次单击会切换大小</p>
        <p>这里因为我固定了容器的高度因此很容易实现动画效果</p>
        <button @click="box1Height = box1Height === 200 ? 300 : 200">切换</button>
        <div class="box1" :style="{ height: box1Height + 'px' }"></div>
        <hr />
        <p>我有一个容器，初始大小是 100px * 内容自适应【3 行文字】</p>
        <p>我单击 button 后会改成 100px * 内容自适应【6 行文字】, 再次单击会切换大小</p>
        <p>这里同样的高度过渡效果，就不生效了</p>
        <button @click="line1 = line1 === 3 ? 6 : 3">切换</button>
        <ul class="box1">
            <li v-for="item in line1">第 {{ item }} 行</li>
        </ul>
        <hr />
        <p>还是上面的例子。我使用 vue 的 transition-group 来看看, 可以看到元素的添加效果非常不错了。但是整个容器还是会抖动</p>
        <button @click="line2 = line2 === 3 ? 6 : 3">切换</button>
        <TransitionGroup name="list" tag="ul" class="box1">
            <li v-for="item in line2" :key="item">第 {{ item }} 行</li>
        </TransitionGroup>
        <hr />
        <p>这里我们改成 js 控制，接住了 gasp，实际上看起来已经是动画了。但其实还有缺陷，每个小的 li 高度是不一致的</p>
        <button @click="line3 = line3 === 3 ? 6 : 3">切换</button>
        <TransitionGroup name="list" tag="ul" class="box1" :css="false" @enter="onEnter" @before-enter="onBeforeEnter"
            @leave="onLeave">
            <li v-for="item in line3" :key="item" :data-index="item - 1">第 {{ item }} 行</li>
        </TransitionGroup>
        <hr />
        <p>自己实现逻辑，先获取当前的高度。然后得到修改后的高度，进行俩个高度的切换</p>
        <p>高度自动了，但是元素的消失是一闪而过</p>
        <button @click="ul4ButtonHandler">切换</button>
        <ul ref="ul4" name="list" tag="ul" class="box1" :style="{ height: ul4Height, overflow: 'hidden' }">
            <li v-for="item in line4" :key="item" :data-index="item - 1">第 {{ item }} 行</li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import { ref, type TransitionGroupProps } from 'vue'
import gsap from 'gsap'

const box1Height = ref(200)

const line1 = ref(3)
const line2 = ref(3)
const line3 = ref(3)
const line4 = ref(3)


// UL3
const onBeforeEnter: TransitionGroupProps['onBeforeEnter'] = (_el) => {
    const el = _el as HTMLElement;
    el.style.opacity = '0'
    el.style.height = '0'
}

const onEnter: TransitionGroupProps['onEnter'] = (_el, done) => {
    const el = _el as HTMLElement;
    console.log('onEnter', el.dataset.index)
    gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: Number(el.dataset.index) * 0.15,
        onComplete: done
    })
}

const onLeave: TransitionGroupProps['onLeave'] = (_el, done) => {
    const el = _el as HTMLElement;
    gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: Number(el.dataset.index) * 0.15,
        onComplete: done
    })
}

// UL4

const ul4 = ref<HTMLUListElement>()
const ul4Height = ref('auto')

const ul4ButtonHandler = () => {
    line4.value = line4.value === 3 ? 6 : 3

    nextTick(() => {

        // 获取子元素的高度
        const children = ul4.value?.children   ?? []
        let height = 0
        for (let i = 0; i < children?.length; i++) {
            const element = children[i];
            height += element.clientHeight
        }
        if (height) {
            ul4Height.value = height + 'px'
        }
    })
}

onMounted(() => {
    const { height } = ul4.value?.getBoundingClientRect() ?? {};
    if (height) {
        ul4Height.value = height + 'px'
    }
})
</script>

<style scoped>
.box1 {
    background-color: red;
    width: 100px;
    transition: height 0.5s ease-in-out;
}

.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    height: 0;
    transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
    position: absolute;
}
</style>