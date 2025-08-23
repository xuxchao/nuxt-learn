<template>
  <h1>Height</h1>

  <div class="container">
    <div class="fixed top-0 left-0 w-full h-10 bg-white">
      {{ scrollY.get() }}
    </div>
    <AnimatePresence :initial="false">
      <motion.div
        v-if="show"
        key="modal"
        class="w-10 h-10 bg-red-500"
        :exit="{ opacity: 0 }"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
      />
    </AnimatePresence>
    <motion.button @click="show = !show">
      show
    </motion.button>
    <button @click="height = 10">
      10
    </button>
    <button @click="height = 20">
      20
    </button>
    <button @click="height = 30">
      30
    </button>
    <button @click="height = 40">
      40
    </button>
    <button @click="height = 50">
      50
    </button>
    <button @click="height = 60">
      60
    </button>
    <button @click="height = 70">
      70
    </button>
    <LayoutGroup>
      <motion.div
        class="bg-red-500 overflow-hidden"
        layout
      >
        <AnimatePresence>
          <motion.div
            v-for="i in height"
            :key="i"
            class="bg-blue-500"
            layout
          >
            <p>Hello {{ i }}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

// const height = useMotionValue(1)
const height = ref(1);
const { scrollY } = useScroll();
const show = ref(true);
scrollY.on("change", (latest) => {
  console.log("Page scroll: ", latest);
  // height.value = Math.round(latest / 10)
});
</script>
