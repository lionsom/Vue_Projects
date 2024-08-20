import axios from 'axios'
// 由于该页面不是Vue的页面，所以无法使用this.$toast，只能乖乖的导包调用
import { Toast } from 'vant'

// -------------- 新建实例 -----------------

// 新建axios实例，将来对新建的实例进行自定义配置
// 好处：不会污染原始axios实例
const SPRequest = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// -------------- 自定义配置 - 请求、响应 拦截器 -----------------

// 添加请求拦截器
SPRequest.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 请求时候，Loading
  Toast.loading({
    message: '正在请求...',
    forbidClick: true, // 禁止背景点击
    duration: 10, // 时长
    loadingType: 'spinner' // 菊花
  })

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
SPRequest.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么

  // 错误码统一拦截
  const res = response.data
  if (res.status === 200) {
    // 隐藏loading
    Toast.clear()
    return res
  } else {
    // 给提示
    Toast(res.message)
    // 抛出一个错误的promise
    return Promise.reject(res.message)
  }
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default SPRequest
