<template>
  <section class="relative bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
    <!-- Floating Action Button -->
    <button
      @click="showNewPinForm = true"
      class="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-2xl z-40"
      aria-label="Add new pin"
    >
      +
    </button>

    <!-- New Pin Modal -->
    <div v-if="showNewPinForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">Add New Pin</h3>
            <button
              @click="showNewPinForm = false"
              class="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-2xl"
            >
              ✕
            </button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Pin Title
              </label>
              <input
                v-model="newPin.title"
                type="text"
                placeholder="e.g., Amazing Recipe"
                class="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Image URL
              </label>
              <input
                v-model="newPin.image"
                type="url"
                placeholder="https://example.com/image.jpg"
                class="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Author Name
              </label>
              <input
                v-model="newPin.author"
                type="text"
                placeholder="Your name"
                class="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="flex gap-3 pt-2">
              <button
                @click="showNewPinForm = false"
                class="flex-1 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                @click="createPin"
                :disabled="!newPin.title.trim() || !newPin.author.trim()"
                class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Create Pin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{{ board.title }}</h2>
      <p class="text-sm text-slate-600 dark:text-slate-300 mb-6">{{ board.description }}</p>

      <div class="flex text-white items-center divide-x-2 divide-slate-600 mb-6 bg-slate-900 rounded-md overflow-hidden">
        <button
          v-for="button in ([
            { tab: 'pins', icon: '𝄙', label: `${board.pins.length}` },
            { tab: 'members', icon: '👥', label: `${board.sharedWith?.length ?? 0}` },
            { tab: 'comments', icon: '💬', label: `${board.comments.length}` },
          ] as Array<{ tab: Tab; icon: string; label: string }>)"
          :key="button.tab"
          type="button"
          aria-label="Items"
          :class="[
            'flex-1 py-2 px-4 hover:bg-slate-700/50 transition-colors font-medium flex items-end justify-center gap-2 text-sm',
            tab === button.tab ? 'bg-slate-700' : ''
          ]"
          @click="tab = button.tab"
        >
          <span class="text-base">{{ button.icon }}</span>
          <span>{{ button.label }}</span>
        </button>
      </div>

      <div
        class="flex flex-col divide-y-2 divide-slate-600"
        v-if="tab === 'pins'"
      >
        <router-link
          v-for="pin in board.pins"
          :key="pin.id"
          :to="{ name: 'PinDetail', params: { boardId: board.id, pinId: pin.id } }"
          class="transition-transform hover:scale-102 block"
        >
          <PinCard :pin="pin" />
        </router-link>
      </div>
      <div v-else-if="tab === 'members'" class="space-y-4">
        <div v-if="!board.sharedWith || board.sharedWith.length === 0" class="text-center py-8">
          <p class="text-slate-500 dark:text-slate-400">This board is private. No members have been added yet.</p>
        </div>
        <div
          v-for="member in board.sharedWith"
          :key="member"
          class="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-semibold">
            {{ member.charAt(0) }}
          </div>
          <div class="font-medium text-slate-900 dark:text-slate-100">{{ member }}</div>
        </div>
        <button
          class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Share this board with others
        </button>
      </div>
      <div v-else-if="tab === 'comments'" class="space-y-5">
        <div class="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
          <h3 class="font-semibold text-slate-800 dark:text-slate-100 mb-3 text-sm">Add a Comment</h3>
          <textarea 
            v-model="newComment"
            placeholder="Share your thoughts..."
            class="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 resize-none"
            rows="3"
          ></textarea>
          <button
            @click="addComment"
            :disabled="!newComment.trim()"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Post Comment
          </button>
        </div>

        <div v-if="board.comments.length === 0" class="text-center py-8">
          <p class="text-slate-500 dark:text-slate-400">No comments yet. Be the first to share your thoughts!</p>
        </div>

        <div
          v-for="comment in sortedComments"
          :key="comment.id"
          class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                  {{ comment.author.charAt(0) }}
                </div>
                <div class="font-semibold text-slate-900 dark:text-slate-100">{{ comment.author }}</div>
              </div>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{{ comment.content }}</p>
              <div class="text-xs text-slate-500 dark:text-slate-400 mt-2">
                {{ formatDate(new Date(comment.createdAt)) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Board as BoardType, Comment } from '../data/mockBoards'
import type { Pin } from '../data/mockPins'
import PinCard from './PinCard.vue'
const props = defineProps<{
  board: BoardType
}>()

type Tab = 'pins' | 'members' | 'comments';

const tab = ref<Tab>('pins')
const newComment = ref('')
const showNewPinForm = ref(false)
const newPin = ref({
  title: '',
  image: '',
  author: ''
})

// Touch handling for swipe navigation
const touchStartX = ref(0)
const touchStartY = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
}

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndX = e.changedTouches[0].clientX
  const touchEndY = e.changedTouches[0].clientY
  
  const deltaX = touchStartX.value - touchEndX
  const deltaY = Math.abs(touchStartY.value - touchEndY)
  
  // Only detect horizontal swipes (ignore vertical scrolling)
  if (Math.abs(deltaX) > 50 && deltaY < 100) {
    const tabs: Tab[] = ['pins', 'members', 'comments']
    const currentIndex = tabs.indexOf(tab.value)
    
    if (deltaX > 0 && currentIndex < tabs.length - 1) {
      // Swiped left, move to next tab
      tab.value = tabs[currentIndex + 1]
    } else if (deltaX < 0 && currentIndex > 0) {
      // Swiped right, move to previous tab
      tab.value = tabs[currentIndex - 1]
    }
  }
}

const sortedComments = computed(() => {
  return [...props.board.comments].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
})

const addComment = () => {
  if (!newComment.value.trim()) return
  
  const comment: Comment = {
    id: Math.max(...props.board.comments.map(c => c.id), 0) + 1,
    author: 'You',
    content: newComment.value.trim(),
    createdAt: new Date()
  }
  
  props.board.comments.push(comment)
  newComment.value = ''
}

const createPin = () => {
  if (!newPin.value.title.trim() || !newPin.value.author.trim()) return
  
  const pin: Pin = {
    id: Math.max(...props.board.pins.map(p => p.id), 0) + 1,
    title: newPin.value.title.trim(),
    image: newPin.value.image.trim() || `https://picsum.photos/seed/${encodeURIComponent(newPin.value.title)}/600/800`,
    author: newPin.value.author.trim(),
    likes: 0
  }
  
  props.board.pins.push(pin)
  newPin.value = { title: '', image: '', author: '' }
  showNewPinForm.value = false
  tab.value = 'pins'
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
