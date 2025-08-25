<script setup>
import { ref } from "vue";
import { motion, AnimatePresence } from "motion-v";

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

const selectedTab = ref(tabs[0]);
</script>

<template>
  <div>
    <h1>Motion</h1>
    <div class="container">
      <nav class="nav">
        <ul class="tabs-container">
          <motion.li
            v-for="item in tabs"
            :key="item.label"
            tag="li"
            class="tab"
            :initial="false"
            :animate="{
              backgroundColor:
                item.label === selectedTab.label ? '#eee' : '#eee0',
            }"
            @click="selectedTab = item"
          >
            {{ `${item.icon} ${item.label}` }}
            <motion.div
              v-if="item.label === selectedTab.label"
              class="underline"
              layout-id="underline"
            />
          </motion.li>
        </ul>
      </nav>
      <main class="icon-container">
        <AnimatePresence mode="wait">
          <motion.div
            :key="selectedTab ? selectedTab.label : 'empty'"
            :initial="{ y: 10, opacity: 0 }"
            :animate="{ y: 0, opacity: 1 }"
            :exit="{ y: -10, opacity: 0 }"
            :transition="{ duration: 0.2 }"
            class="icon"
          >
            {{ selectedTab ? selectedTab.icon : "😋" }}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  </div>
</template>

<style>
.container {
  width: 480px;
  height: 60vh;
  max-height: 360px;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.nav {
  background: #fdfdfd;
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #eeeeee;
  height: 44px;
}

.tabs-container {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  width: 100%;
}

.tab {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  background: white;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  user-select: none;
  color: #0f1115;
}

.underline {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #83e6f7;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.icon {
  font-size: 128px;
}
</style>
