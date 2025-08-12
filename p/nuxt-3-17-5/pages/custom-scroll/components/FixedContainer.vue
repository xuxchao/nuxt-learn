<template>
  <div
    class="fixed left-10 z-[9999] bg-white/70"
    :class="props.position === 'top' ? 'top-10' : 'bottom-10'"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  position: "top" | "bottom";
}>();
</script>
