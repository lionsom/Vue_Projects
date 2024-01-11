// 引入一个一个可能要呈现组件
import Knowledge from '@/views/router-demo/components/Knowledge.vue'
import Home from '@/views/router-demo/components/Home.vue'
import News from '@/views/router-demo/components/News.vue'
import About from '@/views/router-demo/components/About.vue'
import Detail from '@/views/router-demo/components/Detail.vue'
import DetailQuery from '@/views/router-demo/components/Detail-Query.vue'
import DetailParams from '@/views/router-demo/components/Detail-Params.vue'
import DetailProps from '@/views/router-demo/components/Detail-Props.vue'

// 第二步：创建路由器
const routers = [ // 一个一个的路由规则
    {
        name: 'router-demo-knowledge',
        path: '/router-demo/knowledge',
        component:Knowledge
    },
    {
        name: 'router-demo-home',
        path: '/router-demo/home',
        component:Home,
        children: [
            {
                name: 'router-demo-home-detail-params-props',
                path: 'detail-params-props/:id/:title/:content?',
                component:DetailProps,
                // 第一种写法：将路由收到的所有params参数作为props传给路由组件
                props: true
                /** 等价于
                props(route){
                    return route.params
                }
                 */
            },
            {
                name: 'router-demo-home-detail-query-props',
                path: 'detail-query-props',
                component:DetailProps,
                // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                props(route){
                    return route.query
                }
            },
            {
                name: 'router-demo-home-detail-custom',
                path:'detail-custom',
                component:DetailProps,
                // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
                props:{
                    id:100,
                    title:200,
                    content:300
                }
            }
        ]
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
        component:About,
        children: [
            {
                name: 'router-demo-about-detail-query',
                path: 'detail-query',
                component:DetailQuery
            }
        ]
    },
]

// 暴露出去router
export default routers
