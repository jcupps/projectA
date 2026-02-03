<template>
  <section class="relative bg-slate-200/50 dark:bg-slate-800/50 border-2 border-sky-300/30
    rounded-lg shadow-md dark:shadow-gray-950/80 overflow-hidden cursor-pointer">
    <div class="p-4">
      <div class="flex gap-4 items-baseline justify-between">
        <div>
          <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">{{ board.title }}</h2>
          <p class="text-sm text-slate-500 dark:text-slate-300 mb-3">{{ board.description }}</p>
        </div>
        <div class="flex-col gap-1 text-xs text-slate-500 dark:text-slate-300 flex items-start justify-between w-14">
          <span class=" text-red-400"><font-awesome-icon icon="fa-regular fa-heart" /> {{ board.likes }}</span>
          <span><font-awesome-icon icon="fa-regular fa-comment" /> {{ board.comments?.length ?? 0 }}</span>
        </div>
      </div>

      <div
        class="flex flex-col gap-0.5 text-slate-800 dark:text-slate-100 text-sm"
        :style="maskStyle"
      >
        <PinCard
          v-for="pin in visiblePins"
          :key="pin.id"
          :pin="pin"
          :style="'truncated'"1px solid darkblue
        />
         <!-- <div
          v-for="pin in visiblePins"
          :key="pin.id"
          class="flex gap-3 justify-between items-center bg-slate-700/50 h-10 px-2 py-1 border border-slate-200 dark:border-slate-700 rounded"
        >
          <div class="text-sm truncate">{{ pin.title }}</div>
          <img
            v-if="pin.image"
            :src="pin.image"
            :alt="pin.title"
            class="h-full object-cover rounded"
          />
        </div> -->
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
import PinCard from './PinPreview.vue'
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
