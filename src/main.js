import { createApp } from 'vue'
import App from './App.vue'

//Using Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"

import router from './router'

createApp(App).use(router).mount('#app')
