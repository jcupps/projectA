<template>
  <section>
    <Board :board :style="{ 'view-transition-name': `board-${board.id}` }" />
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Board from '../components/FullBoard.vue'
import { mockBoards } from '../data/mockBoards'

const route = useRoute();

// simple local state for now; boards come from mock data
const board = mockBoards.find(b => b.id === Number(route.params.id))!;
</script>
