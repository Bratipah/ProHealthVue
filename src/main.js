import './assets/style.css'
// import { createRouter,createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import store from "./vueX/index";
import router from './components/routes/Index';





createApp(App)
.use(store)
.use(router)
.mount('#app')

