<template>
  <article
    v-if="!isExpanded"
      :class="[
        'rounded-2xl overflow-hidden shadow-sm bg-slate-200 dark:bg-slate-800',
        'border-2 border-sky-300/30 transition-colors',
        style === 'detailed' ? 'hover:bg-slate-300 dark:hover:bg-slate-700' : ''
      ]"
    >
    <div
      :class="['relative bg-cover bg-center', style === 'truncated' ? 'h-12' : 'h-[4.5rem]']"
      :style="config.pinImageStyle === 'background' ? { backgroundImage: `url(${pin.image})` } : {}"
      role="img"
      :aria-label="pin.title"
    >
      <!-- Add an overlay to darken the bg image. -->
      <div
        v-if="config.pinImageStyle === 'background'"
        class="absolute inset-0 bg-white/60 dark:bg-black/60"
      ></div>

      <div :class="['relative flex gap-4 items-center ps-5 py-2 h-full', style === 'detailed' ? 'pe-2' : 'pe-5']">
        <div class="flex-1 min-w-0 h-full">
          <div class="flex flex-col gap-2 h-full justify-center">
            <h3 class="font-semibold text-slate-800 dark:text-slate-100 truncate"
              :style="{ 'view-transition-name': `pin-title-${pin.id}` }"
            >{{ pin.title }}</h3>
            <!-- <div
              v-if="style === 'detailed'"
              class="text-xs text-slate-500 dark:text-slate-300 flex items-center justify-between"
            >
              <span class="truncate">{{ pin.description }}</span>
            </div> -->
            <div
              v-if="style === 'detailed'"
              class="flex gap-4 text-xs text-slate-500 dark:text-slate-300 items-start ps-2"
            >
              <span class=" text-red-400"><font-awesome-icon icon="fa-regular fa-heart" /> {{ pin.likes }}</span>
              <span><font-awesome-icon icon="fa-regular fa-comment" /> {{ pin.comments?.length ?? 0 }}</span>
            </div>
          </div>
        </div>
        <img
          v-if="config.pinImageStyle !== 'background' && pin.image"
          :src="pin.image"
          :alt="pin.title"
          :class="['h-full object-cover rounded', style === 'detailed' ? 'w-24' : 'w-16']"
          :style="{ 'view-transition-name': `pin-img-${pin.id}` }"
        />
        <div v-if="style === 'detailed'" class="flex gap-2 h-full">
          <!-- <div class="flex-col gap-1 text-xs text-slate-500 dark:text-slate-300 flex items-start justify-between w-12">
            <span class=" text-red-400"><font-awesome-icon icon="fa-regular fa-heart" /> {{ pin.likes }}</span>
            <span><font-awesome-icon icon="fa-regular fa-comment" /> {{ pin.comments?.length ?? 0 }}</span>
          </div> -->
          <button
            class="w-6 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all h-full"
            @click.stop.prevent="expand"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="2text-slate-600 dark:text-slate-400" />
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
      <div class="relative flex flex-col gap-4 ps-5 pe-2 py-4">
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
            class="w-6 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all h-full shrink-0"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-slate-600 dark:text-slate-400 rotate-180" />
          </button>
        </div>
        <img
          v-if="config.pinImageStyle !== 'background' && pin.image"
          :src="pin.image"
          :alt="pin.title"
          class="w-full h-auto object-cover rounded"
          :style="{ 'view-transition-name': `pin-img-${pin.id}` }"
        />

        <div class="flex gap-8 mb-6 text-slate-500 dark:text-slate-400">
          <button
            @click="() => {}"
            class="flex items-center gap-2 group hover:text-red-500 transition-colors"
          >
            <span class="w-9 h-9 rounded-full group-hover:bg-red-500/10 flex items-center justify-center text-lg transition-colors">
              <font-awesome-icon icon="fa-regular fa-heart" />
            </span>
            <span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-red-500">{{ pin.likes }}</span>
          </button>
          <button
            @click="() => {}"
            class="flex items-center gap-2 group hover:text-blue-500 transition-colors"
          >
            <span class="w-9 h-9 rounded-full group-hover:bg-blue-500/10 flex items-center justify-center text-lg transition-colors">
              <font-awesome-icon icon="fa-regular fa-comment" />
            </span>
            <span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-500">{{ pin.comments?.length ?? 0 }}</span>
          </button>
          <button
            class="flex items-center gap-2 group hover:text-blue-500 transition-colors"
          >
            <span class="w-9 h-9 rounded-full group-hover:bg-blue-500/10 flex items-center justify-center text-lg transition-colors">
              <font-awesome-icon icon="fa-regular fa-bookmark" />
            </span>
          </button>
          <button
            class="flex items-center gap-2 group hover:text-blue-500 transition-colors"
          >
            <span class="w-9 h-9 rounded-full group-hover:bg-blue-500/10 flex items-center justify-center text-lg transition-colors">
              <font-awesome-icon icon="fa-solid fa-share-nodes" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Pin } from '../data/mockPins'
import config from '../config';
import { ref } from 'vue';

const { pin, style = 'detailed' } = defineProps<{ pin: Pin, style?: 'truncated' | 'detailed' }>()
const isExpanded = ref(false);

const emit = defineEmits<{
  (e: 'expand', pinId: number): void;
}>();

function collapse() {
  if (!isExpanded.value) return;

  document.startViewTransition(() => {
    isExpanded.value = false;
  });
}

function expand() {
  if (isExpanded.value) return;

  document.startViewTransition(() => {
    isExpanded.value = true;
  });

  emit('expand', pin.id);
}

defineExpose({
  pin,
  expand,
  collapse
});
</script>
