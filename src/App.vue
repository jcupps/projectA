<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
    <Header />

    <div>
      <section class="py-4 bg-white/5">
        <div class="max-w-6xl mx-auto px-4">
          <p class="text-sm text-slate-500">Boards</p>
        </div>
      </section>

      <section class="py-6">
        <div class="max-w-6xl mx-auto px-4">
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
