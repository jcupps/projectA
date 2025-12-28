<template>
  <header class="sticky top-0 bg-white/90 dark:bg-slate-900/80 backdrop-blur z-20 border-b dark:border-slate-700">
    <div class="max-w-6xl mx-auto flex items-center gap-3 px-4 py-3">
      <h1 class="text-xl font-bold text-sky-600 dark:text-sky-400">Pinboard POC</h1>
      <div class="flex-1">
        <input
          placeholder="Search"
          class="w-full px-3 py-2 rounded bg-slate-100 dark:bg-slate-800 text-sm dark:text-slate-200"
        />
      </div>

      <div class="flex items-center gap-3">
        <button @click="toggleTheme" class="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-sm">
          <span v-if="isDark">🌙 Dark</span>
          <span v-else>☀️ Light</span>
        </button>
        <button class="text-sm text-sky-600 dark:text-sky-400">Profile</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function applyDark(d: boolean) {
  if (d) document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
}

function toggleTheme() {
  isDark.value = !isDark.value
  try {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  } catch (e) {}
  applyDark(isDark.value)
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = saved === 'dark' || (!saved && prefersDark)
  } catch (e) {
    isDark.value = false
  }
  applyDark(isDark.value)
})
</script>
