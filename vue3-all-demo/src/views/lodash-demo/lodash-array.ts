import * as _ from 'lodash'

function myFunc() {
  let org_arr = [1,2,3,4,5,6,7,8,9,10];
  let arr = _.chunk(org_arr, 3);
  console.log(arr);
}

export { myFunc };
