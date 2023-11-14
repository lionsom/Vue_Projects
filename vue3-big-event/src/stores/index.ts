import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// ********************************
// ****** 统一管理模块，统一出口 ******
// ********************************

// 方式一
import { useUserStore } from './modules/user'
export { useUserStore }

// 方式二: 接收所有conter模块的导出
export * from './modules/counter'
