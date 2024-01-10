// 引入一个一个可能要呈现组件
import Knowledge from '@/views/router-demo/components/Knowledge.vue'
import Home from '@/views/router-demo/components/Home.vue'
import News from '@/views/router-demo/components/News.vue'
import About from '@/views/router-demo/components/About.vue'
import Detail from '@/views/router-demo/components/Detail.vue'
import DetailQuery from '@/views/router-demo/components/Detail-Query.vue'
import DetailParams from '@/views/router-demo/components/Detail-Params.vue'

// 第二步：创建路由器
const routers = [ //一个一个的路由规则
    {
        name: 'router-demo-knowledge',
        path: '/router-demo/knowledge',
        component:Knowledge
    },
    {
        name: 'router-demo-home',
        path: '/router-demo/home',
        component:Home
    },
    {
        name: 'router-demo-news',
        path: '/router-demo/news',
        component:News,
        children: [
            {
                name: 'router-demo-news-detail',
                path: 'detail',
                component:Detail
            },
            {
                name: 'router-demo-news-detail-query',
                path: 'detail-query',
                component:DetailQuery
            },
            {
                name: 'router-demo-news-detail-params',
                path:'detail-params/:id/:title/:content?',
                component:DetailParams
            }
        ]
    },
    {
        name: 'router-demo-about',
        path:'/router-demo/about',
        component:About
    },
]

// 暴露出去router
export default routers
