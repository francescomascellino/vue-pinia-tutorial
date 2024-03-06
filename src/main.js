import { createApp } from 'vue'

// 1 IMPORT PINIA
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

// 2 USE PINIA
createApp(App).use(createPinia()).mount('#app')
