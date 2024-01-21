import { inRange as lxInRange, random } from "lodash"
import clamp from 'lodash/clamp';

export default function () {

  function lodashClamp() {
    console.log(clamp(-10, -5, 5));
  }

  function lodashInRange() {
    console.log(lxInRange(10, 10, 20));
    console.log(lxInRange(9, 10, 20));
  }

  function lodashRandom() {
    console.log(random(1, 100));
  }

  // 向外部提供东西
  return { lodashClamp, lodashInRange, lodashRandom }
}