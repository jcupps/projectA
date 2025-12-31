import { createRouter, createWebHistory } from 'vue-router'
import BoardDetail from '../views/BoardDetail.vue'
import FeedView from '../views/FeedView.vue'
import PinDetailView from '../views/PinDetailView.vue'

const routes = [
  { path: '/', name: 'Feed', component: FeedView },
  { path: '/board/:id', name: 'BoardDetail', component: BoardDetail },
  { path: '/board/:boardId/pin/:pinId', name: 'PinDetail', component: PinDetailView }
]

export const router = createRouter({
  history: createWebHistory('/projectA/'),
  routes
})

router.beforeEach((to, from, next) => {
  if (document.startViewTransition) {
    document.startViewTransition(next);
  } else {
    next();
  }
})

export default router
