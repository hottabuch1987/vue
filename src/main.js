import './assets/main.css'
import 'material-icons/iconfont/material-icons.css' 
import { createApp } from 'vue'
import App from './App.vue'
// Импортируем роутер
import router from './router'

createApp(App)
  .use(router) // Регистрируем роутер
  .mount('#app')