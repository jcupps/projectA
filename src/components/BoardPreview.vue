<template>
  <section :class="[
    'relative bg-slate-200 dark:bg-slate-800 border-2 border-sky-300/30 hover:bg-slate-300 dark:hover:bg-slate-700',
    'rounded-lg shadow-md dark:shadow-gray-950/80 overflow-hidden cursor-pointer',
    'flex flex-col',
    !showSamplePins ? 'h-80' : ''
  ]">
    <div class="flex gap-4 items-baseline justify-between p-4">
      <div>
        <!-- Author -->
        <div class="flex items-center gap-2 mb-2 text-sm">
          <div class="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center
            text-white font-semibold">
            {{ board.author.charAt(0) }}
          </div>
          <div>
            <div class="font-semibold text-slate-700 dark:text-slate-300">{{ board.author }}</div>
          </div>
        </div>

        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">{{ board.title }}</h2>
        <!-- <p class="text-sm text-slate-500 dark:text-slate-300">{{ board.description }}</p> -->
      </div>
      <div class="flex-col gap-1 text-xs text-slate-500 dark:text-slate-300 flex items-start justify-between w-12">
        <span class=" text-red-400"><font-awesome-icon icon="fa-regular fa-heart" /> {{ board.likes }}</span>
        <span><font-awesome-icon icon="fa-regular fa-comment" /> {{ board.comments?.length ?? 0 }}</span>
      </div>
    </div>

    <div
      class="bg-cover bg-center h-full"
      :style="{
        ...maskStyle,
        'background-image': `url('${visiblePins.find(pin => !!pin.image)?.image}')`
      }"
    >
      <!-- <PinCard
        v-for="pin in visiblePins"
        :key="pin.id"
        :pin="pin"
        :style="'truncated'"1px solid darkblue
      /> -->
      <div v-if="showSamplePins" class="p-4 flex flex-col gap-1 text-slate-800 dark:text-slate-100 text-sm">
        <div
          v-for="pin in visiblePins"
          :key="pin.id"
          class="py-2 px-4 rounded-lg bg-slate-900/80 backdrop-blur-[3px] border border-slate-600 truncate font-semibold"
          style="text-shadow: 0 0 5px black;"
        >
          {{ pin.title }}
        </div>
        <div
          v-if="moreCount > 0"
          class="py-2 px-4 rounded-lg bg-slate-900/80 backdrop-blur-[3px] border border-slate-600 text-center"
        >
          +{{ moreCount }} more
        </div>
      </div>
      <div
        v-else
        class="flex flex-col gap-1 text-slate-800 dark:text-slate-100 text-sm justify-end h-full"
      >
        <div class="p-4 bg-slate-900/60 text-center content-center backdrop-blur-[2px] font-semibold">
          {{ visiblePins.length }} Items
        </div>
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

const showSamplePins = false;

const visiblePins = computed(() => props.clipTo ? props.board.pins.slice(0, props.clipTo) : props.board.pins)
const moreCount = computed(() => Math.max(0, props.board.pins.length - visiblePins.value.length))

const maskStyle = computed(() => {
  return {}; // Temporary disable mask

  if (moreCount.value <= 0) return {}
  return {
    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
  }
})
</script>
