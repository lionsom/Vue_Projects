import {defineStore} from 'pinia'

const useCountStore = defineStore('count', {
    // 真正存储数据的地方，
    state() {
        return {
            count: 0,
        }
    },
})

// 抛出
export default useCountStore;