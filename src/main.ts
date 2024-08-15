// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

// App根组件
const app = createApp(App);
// 创建pinia
const pinia = createPinia();
// 挂载路由
app.use(router);
// 挂载pinia
app.use(pinia);
// 挂载根组件
app.mount('#app')
