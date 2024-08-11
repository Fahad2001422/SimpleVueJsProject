import '@/assets/main.css'
import { followingDotCursor } from 'cursor-effects'

import { createApp, provide } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.mount('#app')

provide('cursor-effect', new followingDotCursor({ element: document.body, color: '#0c9b67'}))