import _ from 'lodash'

export default function () {
  function lodashChunk() {
    let org_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr = _.chunk(org_arr, 3);
    console.log(arr);
  }

  function lodashCompact () {
    let org_arr = ['', 0, 1, 2, 3];
    let arr = _.compact(org_arr);
    console.log('原始数据 = ', org_arr, '，过滤后数据 = ', arr);
  }

  // 向外部提供东西
  return { lodashChunk, lodashCompact }
}