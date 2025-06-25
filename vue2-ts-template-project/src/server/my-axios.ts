import Vue from 'vue'
import axios, { InternalAxiosRequestConfig } from 'axios'
import { BASEURL } from './config'

const service = axios.create({
  baseURL: BASEURL, // api的base_url
  timeout: 15000 // 请求超时时间
})

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  type?: 'form'
}

// request拦截器
service.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      config.headers['Content-Type'] = 'application/json'
      // 序列化
      config.data = JSON.stringify(config.data)
      if (config.type === 'form') {
        config.headers['Content-Type'] = 'multipart/form-data'
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.success) {
      return res.data // 直接返回数据
    } else {
      Vue.prototype.$toast.show(res.success, 'error') // 统一报错方式
      return Promise.reject(res)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
