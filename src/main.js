import './assets/style.css'
// import { createRouter,createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import store from "./vueX/index";
import router from './components/routes/Index';
import VueGoogleMaps from '@fawmi/vue-google-maps';





createApp(App)
.use(store)
.use(router)
.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB0GUseUzkJD4XdRG45WgdGDD5V_LYUfag',
    },
  })
.mount('#app')

