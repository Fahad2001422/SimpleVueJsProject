import '@/assets/main.css'
import { followingDotCursor } from '@/assets/cursor-effects/esm'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.mount('#app')

new followingDotCursor({ element: document.body, color: 'darkgreen'})