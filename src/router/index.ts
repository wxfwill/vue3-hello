import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import News from '@/views/News.vue';
import NewsDetail from '@/views/Detail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'shouye', path: '/home', component: Home },
        { name: 'guanyu', path: '/about', component: About },
        {
            name: 'xinwen', path: '/news', component: News,
            children: [{
                // path: 'detail', component: NewsDetail  // query
                // path: 'detail/:id/:name?', name: 'xiang', component: NewsDetail  // params  ?配置参数的必要性
                path: 'detail',
                name: 'xiang',
                component: NewsDetail,
                // 第一种
                // props: true  // 将路由参数所有的params映射到组件的props属性上，及props只能与params配合使用
                // 第二种 函数写法，可以自己决定将什么参数映射到props上
                props: (route) => {
                    return route.query;
                },
                // 第三种 对象写法，可以自己决定将什么参数映射到props上 下面传递的值是写死的，用的比较少
                // props: { id: 'id', name: 'name' }

            }]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router;