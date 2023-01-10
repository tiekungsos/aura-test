import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import { createPinia, setActivePinia } from "pinia" 

import './assets/main.scss'

// import '@/scss/main.scss';
const pinia = createPinia()
const app = createApp(App)

setActivePinia(pinia);

app.use(Vue3Lottie)
app.use(pinia)

app.use(router)


app.mount('#app')
