import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './states/MainStore'

import './assets/bootstrap.bundle.min.js'
import './assets/bootstrap.min.css'
import './assets/main.css'

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
