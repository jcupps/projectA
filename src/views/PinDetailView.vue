<template>
  <div class="min-h-screen">
    <!-- Header with Back Button -->
    <div class="sticky top-0 z-40">
      <div class="pt-3 flex items-center justify-between">
        <router-link
          :to="{ name: 'BoardDetail', params: { id: boardId } }"
          class="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          <span class="text-xl">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </span>
          {{  board?.title }}
        </router-link>
      </div>
    </div>

    <!-- Main Content -->
    <div v-if="pin" class="py-4">
      <div class="overflow-hidden">
        <!-- Content Section -->
        <div>
          <!-- Title -->
          <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            :style="{ 'view-transition-name': `pin-title-${pin.id}` }"
          >
            {{ pin.title }}
          </h1>

          <!-- Description Section (text content first) -->
          <div class="mb-6">
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {{ pin.description }}
            </p>
          </div>

          <!-- Image (show after text if present) -->
          <div v-if="pin.image" class="relative h-96 md:h-[500px] bg-slate-900 overflow-hidden mb-8">
            <img
              :src="pin.image"
              :alt="pin.title"
              class="w-full h-full object-cover"
              :style="{ 'view-transition-name': `pin-img-${pin.id}` }"
            />
          </div>

          <div class="whitespace-pre text-slate-900 dark:text-slate-100 mb-8">{{ pin.body }}</div>

          <!-- Action Buttons -->
          <div class="flex gap-8 mb-6 text-slate-500 dark:text-slate-400">
            <button
              @click="handleLike"
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
              <span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-500">Save</span>
            </button>
            <button
              class="flex items-center gap-2 group hover:text-blue-500 transition-colors"
            >
              <span class="w-9 h-9 rounded-full group-hover:bg-blue-500/10 flex items-center justify-center text-lg transition-colors">
                <font-awesome-icon icon="fa-solid fa-share-nodes" />
              </span>
              <span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-500">Share</span>
            </button>
          </div>

          <!-- Comments Section -->
          <div class="border-t border-slate-200 dark:border-slate-700 pt-8">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Comments ({{ board?.comments.length ?? 0 }})</h3>

            <!-- Add Comment Form -->
            <div class="mb-8 p-6 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600">
              <h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-4">Share your thoughts</h4>
              <textarea
                v-model="newComment"
                placeholder="Write a comment..."
                class="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-none"
                rows="4"
              ></textarea>
              <button
                @click="addComment"
                :disabled="!newComment.trim()"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-md transition-colors"
              >
                Post Comment
              </button>
            </div>

            <!-- Comments List -->
            <div v-if="board?.comments.length === 0" class="text-center py-8">
              <p class="text-slate-500 dark:text-slate-400">No comments yet. Be the first to share your thoughts!</p>
            </div>

            <div v-else class="space-y-5">
              <div
                v-for="comment in sortedComments"
                :key="comment.id"
                class="p-5 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div class="flex items-start justify-between gap-4 mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                      {{ comment.author.charAt(0) }}
                    </div>
                    <div>
                      <div class="font-semibold text-slate-900 dark:text-slate-100">{{ comment.author }}</div>
                      <div class="text-xs text-slate-500 dark:text-slate-400">{{ formatDate(new Date(comment.createdAt)) }}</div>
                    </div>
                  </div>
                </div>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">{{ comment.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading/Not Found State -->
    <div v-else class="flex items-center justify-center min-h-[400px]">
      <div class="text-center">
        <p class="text-slate-500 dark:text-slate-400 text-lg mb-4">Pin not found</p>
        <router-link
          to="/"
          class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          Return to Feed
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Pin } from '../data/mockPins'
import type { Comment } from '../data/mockBoards'
import { mockBoards } from '../data/mockBoards'

const route = useRoute()
const newComment = ref('')

const boardId = computed(() => parseInt(route.params.boardId as string))
const pinId = computed(() => parseInt(route.params.pinId as string))

const board = computed(() => {
  return mockBoards.find(b => b.id === boardId.value) || null
})

const pin = computed(() => {
  const b = board.value
  if (!b) return null
  return b.pins.find(p => p.id === pinId.value) || null
})

const sortedComments = computed(() => {
  if (!board.value) return []
  return [...board.value.comments].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
})

const addComment = () => {
  if (!newComment.value.trim() || !board.value) return
  
  const comment: Comment = {
    id: Math.max(...board.value.comments.map(c => c.id), 0) + 1,
    author: 'You',
    content: newComment.value.trim(),
    createdAt: new Date()
  }
  
  board.value.comments.push(comment)
  newComment.value = ''
}

const handleLike = () => {
  if (pin.value) {
    pin.value.likes++
  }
}

const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor(diff / (1000 * 60))
  
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days}d ago`
  
  return date.toLocaleDateString()
}
</script>
