import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
//Using Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"

import router from './router'

const myApp = createApp(App)
myApp.use(router)
myApp.use(store)
myApp.use(VueAxios, axios)
myApp.mount('#app')
