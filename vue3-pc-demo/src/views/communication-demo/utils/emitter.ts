// 引入mitt
import mitt from 'mitt'

// 调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter = mitt()

/********************* 举个栗子 *********************/
/* 批量注释 option + shift + a
// 绑定事件 on
emitter.on('test1',()=>{
  console.log('test1被调用了')
})
emitter.on('test2',()=>{
  console.log('test2被调用了')
})

// 触发事件 emit
setInterval(() => {
  emitter.emit('test1')
  emitter.emit('test2')
}, 1000);

// 解绑事件 off
setTimeout(() => {
  // emitter.off('test1')
  // emitter.off('test2')
  emitter.all.clear()
}, 3000); */

/**************************************************/

// 暴露emitter
export default emitter