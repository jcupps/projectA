<template>
  <section class="relative bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
    <div class="p-4">
      <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">{{ board.title }}</h2>
      <p class="text-sm text-slate-500 dark:text-slate-300 mb-3">{{ board.description }}</p>

      <div class="flex flex-col gap-3" :style="maskStyle">
        <PinCard v-for="pin in visiblePins" :key="pin.id" :pin="pin" />
      </div>
      <div v-if="moreCount > 0" class="relative z-20 mt-1 text-center text-sm text-slate-600 dark:text-slate-300">
        +{{ moreCount }} more
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Board as BoardType } from '../data/mockBoards'
import PinCard from './PinCard.vue'
const props = defineProps<{
  board: BoardType,
  clipTo?: number
}>()

const visiblePins = computed(() => props.clipTo ? props.board.pins.slice(0, props.clipTo) : props.board.pins)
const moreCount = computed(() => Math.max(0, props.board.pins.length - visiblePins.value.length))

const maskStyle = computed(() => {
  if (moreCount.value <= 0) return {}
  return {
    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
  }
})
</script>
