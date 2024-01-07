// 引入一个一个可能要呈现组件
import Home from '@/views/router-demo/components/Home.vue'
import News from '@/views/router-demo/components/News.vue'
import About from '@/views/router-demo/components/About.vue'

// 第二步：创建路由器
const routers = [ //一个一个的路由规则
    {
        name: 'router-demo-home',
        path:'/router-demo/home',
        component:Home
    },
    {
        name: 'router-demo-news',
        path:'/router-demo/news',
        component:News
    },
    {
        name: 'router-demo-about',
        path:'/router-demo/about',
        component:About
    },
]

// 暴露出去router
export default routers
