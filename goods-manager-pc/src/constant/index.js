// 统一管理常量的入口
import ROLE_GENDER from './model/userinfo'
import APPINFO from './model/appinfo'

let appDesc = '百度app'
if (APPINFO.SYSTEM_NAME === 'RA系统') {
  appDesc = APPINFO.SYSTEM_NAME
}

export { APPINFO, ROLE_GENDER, appDesc }
