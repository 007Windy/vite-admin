import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// css
import "normalize.css"
import '@/styles/index.scss'

// svg
import SvgIcon from './components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'

createApp(App).use(router).use(createPinia()).component('svg-icon', SvgIcon).mount('#app')
