<template>
  <article v-if="!isExpanded" class="rounded-2xl overflow-hidden shadow-sm dark:bg-slate-800 dark:hover:bg-slate-700
    border-2 border-sky-300/30 transition-colors">
    <div
      class="relative h-16 bg-cover bg-center"
      :style="config.pinImageStyle === 'background' ? { backgroundImage: `url(${pin.image})` } : {}"
      role="img"
      :aria-label="pin.title"
    >
      <!-- I think this was added as an overlay for the bg image. -->
      <!-- <div class="absolute inset-0 bg-white/60 dark:bg-black/60"></div> -->

      <div class="relative flex gap-4 items-center px-5 py-2 h-full">
        <div class="flex-1 min-w-0">
          <div class="flex flex-col gap-0.5">
            <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate"
              :style="{ 'view-transition-name': `pin-title-${pin.id}` }"
            >{{ pin.title }}</h3>
            <div class="text-xs text-slate-500 dark:text-slate-300 flex items-center justify-between">
              <span class="truncate">{{ pin.description }}</span>
            </div>
          </div>
        </div>
        <img
          v-if="config.pinImageStyle !== 'background' && pin.image"
          :src="pin.image"
          :alt="pin.title"
          class="h-full object-cover rounded"
          :style="{ 'view-transition-name': `pin-img-${pin.id}` }"
        />
        <div class="flex gap-2">
          <div class="flex-col gap-1 text-xs text-slate-500 dark:text-slate-300 flex items-start justify-between w-12">
            <span class=" text-red-400"><font-awesome-icon icon="fa-regular fa-heart" /> {{ pin.likes }}</span>
            <span><font-awesome-icon icon="fa-regular fa-comment" /> {{ pin.comments?.length ?? 0 }}</span>
          </div>
          <button
            class="w-6 h-6 rounded-full bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            @click.stop.prevent="expand"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-slate-600 dark:text-slate-300 text-xs" />
          </button>
        </div>
      </div>
    </div>
  </article>
  <article v-else class="rounded-2xl overflow-hidden shadow-sm dark:bg-slate-800 dark:hover:bg-slate-700
    border-2 border-sky-300/30 transition-colors">
    <div
      class="relative h-auto bg-cover bg-center"
      :style="config.pinImageStyle === 'background' ? { backgroundImage: `url(${pin.image})` } : {}"
      role="img"
      :aria-label="pin.title"
    >
      <div class="relative flex flex-col gap-4 px-5 py-4">
        <div class="flex flex-1 gap-3 min-w-0 justify-between">
          <div class="flex flex-col gap-1">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100"
              :style="{ 'view-transition-name': `pin-title-${pin.id}` }"
            >{{ pin.title }}</h3>
            <div class="text-sm text-slate-500 dark:text-slate-300 flex items-center justify-between">
              <span>{{ pin.description }}</span>
            </div>
          </div>
          <button
            @click.stop.prevent="collapse"
            class="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-slate-600 dark:text-slate-300 text-xs rotate-180" />
          </button>
        </div>
        <img
          v-if="config.pinImageStyle !== 'background' && pin.image"
          :src="pin.image"
          :alt="pin.title"
          class="w-full h-auto object-cover rounded"
          :style="{ 'view-transition-name': `pin-img-${pin.id}` }"
        />
        <div class="flex-col gap-2 text-sm text-slate-500 dark:text-slate-300 flex items-start justify-between w-16">
          <span class=" text-red-400"><font-awesome-icon icon="fa-regular fa-heart" /> {{ pin.likes }}</span>
          <span><font-awesome-icon icon="fa-regular fa-comment" /> {{ pin.comments?.length ?? 0 }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Pin } from '../data/mockPins'
import config from '../config';
import { ref } from 'vue';

const props = defineProps<{ pin: Pin }>()
const isExpanded = ref(false);

function collapse() {
  document.startViewTransition(() => {
    isExpanded.value = false;
  });
}

function expand() {
  document.startViewTransition(() => {
    isExpanded.value = true;
  });
}
</script>
