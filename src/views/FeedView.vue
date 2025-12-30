<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <Board
      v-for="board in boards"
      :key="board.id"
      :board="board"
      :clip-to="4"
      :style="{ 'view-transition-name': `board-${board.id}` }"
      @click="router.push(`/board/${board.id}`)"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Board from '../components/MiniBoard.vue'
import { mockBoards } from '../data/mockBoards'

const router = useRouter();

// simple local state for now; boards come from mock data
const boards = mockBoards
</script>
