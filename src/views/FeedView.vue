<template>
  <div>
    <section class="py-4 bg-white/5">
      <div class="max-w-6xl mx-auto px-4">
        <p class="text-sm text-slate-500">Boards</p>
      </div>
    </section>

    <section class="py-6">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Board v-for="board in boards" :key="board.id" :board="board" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Board from '../components/Board.vue'
import { mockBoards } from '../data/mockBoards'

// simple local state for now; boards come from mock data
const boards = mockBoards
</script>
