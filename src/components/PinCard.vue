<template>
  <article class="rounded overflow-hidden shadow-sm">
    <div
      class="relative h-12 bg-cover bg-center"
      :style="{ backgroundImage: `url(${pin.image})` }"
      role="img"
      :aria-label="pin.title"
    >
      <div class="absolute inset-0 bg-white/60 dark:bg-black/60"></div>

      <div class="relative flex items-center p-3 h-full">
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{{ pin.title }}</h3>
          <div class="text-xs text-slate-500 dark:text-slate-300 flex items-center justify-between">
            <span class="truncate">{{ pin.author }}</span>
            <span class="ml-2">❤ {{ pin.likes }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Pin } from '../data/mockPins'
const props = defineProps<{ pin: Pin }>()
</script>
