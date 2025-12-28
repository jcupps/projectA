<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <Header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
