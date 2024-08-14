// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// App根组件
const app = createApp(App);
// 挂载路由
app.use(router);
// 挂载根组件
app.mount('#app')
