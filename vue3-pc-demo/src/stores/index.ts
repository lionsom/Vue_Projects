import { defineStore } from 'pinia'
import useCountStore from "./modules/count";
import { useCounterStore } from "./modules/counter";

// 定义总Store，管理所有模块的Store
const useStore = defineStore('main', {
    state() {
        return {
            count: useCountStore(),
            counter: useCounterStore(),
        }
    },
})

// 默认导出
export default useStore;





/** pinia和vuex的区别？
    pinia没有命名空间，没有模块化。
    pinia是一种中小型的状态管理库，而vuex是中型的状态管理库。
    pinia没有mutations，所有的操作都在actions中操作。
    pinia的state总是以函数的方式存在。
 */