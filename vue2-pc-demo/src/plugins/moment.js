import moment from 'moment'

moment().format()

function lxNowTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

function lxNowDateShort() {
  return moment().format('YYYY-MM-DD')
}

export default { lxNowTime, lxNowDateShort }
