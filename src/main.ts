import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import router from './router'

// initialize theme from localStorage or system preference
try {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
} catch (e) {
  // ignore (no localStorage in some environments)
}

// register service worker helper provided by vite-plugin-pwa
import { registerSW } from 'virtual:pwa-register'

const app = createApp(App)
app.use(router)
app.mount('#app')

const updateSW = registerSW({
  onNeedRefresh() {
    /* you can prompt user to refresh */
  },
  onOfflineReady() {
    /* app ready for offline use */
  }
})
