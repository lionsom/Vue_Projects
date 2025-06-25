// mock.js
// import Mock from 'mockjs';
import Mock from 'mockjs'

// 模拟的接口
Mock.mock('/api/getUsers', 'get', {
  data: Mock.mock({
    'list|10': [
      {
        'id|+1': 1,
        name: '@cname',
        'age|18-30': 1
      }
    ]
  }).list
})
