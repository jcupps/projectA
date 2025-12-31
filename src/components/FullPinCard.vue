<template>
  <div v-if="pin" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white dark:bg-slate-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-3xl bg-white dark:bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors z-10"
        aria-label="Close pin"
      >
        ✕
      </button>

      <div class="relative">
        <!-- Image Section -->
        <div class="relative h-96 bg-slate-900 overflow-hidden">
          <img
            :src="pin.image"
            :alt="pin.title"
            class="w-full h-full object-cover"
            :style="{ 'view-transition-name': `pin-img-${pin.id}` }"
          />
        </div>

        <!-- Content Section -->
        <div class="p-8">
          <!-- Title -->
          <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2"
            :style="{ 'view-transition-name': `pin-title-${pin.id}` }"
          >
            {{ pin.title }}
          </h1>

          <!-- Author and Likes -->
          <div class="flex items-center justify-between mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-semibold">
                {{ pin.author.charAt(0) }}
              </div>
              <div>
                <div class="font-semibold text-slate-900 dark:text-slate-100">{{ pin.author }}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">Creator</div>
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl">❤</div>
              <div class="text-lg font-bold text-slate-900 dark:text-slate-100">{{ pin.likes }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">Likes</div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3 mb-6">
            <button
              @click="handleLike"
              class="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <span class="text-xl">❤</span>
              Like
            </button>
            <button
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <span class="text-xl">📌</span>
              Save
            </button>
            <button
              class="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-semibold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <span class="text-xl">📤</span>
              Share
            </button>
          </div>

          <!-- Description Section (optional) -->
          <div class="mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
            <h3 class="font-semibold text-slate-900 dark:text-slate-100 mb-3">About this pin</h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              This beautiful image by {{ pin.author }} has received {{ pin.likes }} likes from our community.
            </p>
          </div>

          <!-- Related Info -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div class="text-xs text-slate-500 dark:text-slate-400 mb-1">Pin ID</div>
              <div class="font-semibold text-slate-900 dark:text-slate-100">#{{ pin.id }}</div>
            </div>
            <div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div class="text-xs text-slate-500 dark:text-slate-400 mb-1">Views</div>
              <div class="font-semibold text-slate-900 dark:text-slate-100">{{ (pin.likes * 3) + Math.floor(Math.random() * 100) }}</div>
            </div>
          </div>

          <!-- Close Button at Bottom -->
          <button
            @click="$emit('close')"
            class="w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-semibold py-3 px-4 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pin } from '../data/mockPins'

defineProps<{
  pin: Pin | null
}>()

defineEmits<{
  close: []
}>()

const handleLike = () => {
  if (!document.querySelector('[data-pin-id]')) return
  // In a real app, this would update the backend
  // For now, we'll just show feedback
}
</script>
