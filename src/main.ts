import { createApp } from 'vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import icons and add them to the Library */
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faEllipsisVertical, faShareNodes } from '@fortawesome/free-solid-svg-icons'
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

library.add(faBookmark, faChevronDown, faComment, faEllipsisVertical, faHeart, faShareNodes)

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

const updateSW = registerSW({
  onNeedRefresh() {
    /* you can prompt user to refresh */
  },
  onOfflineReady() {
    /* app ready for offline use */
  }
})
