import moment from 'moment'

moment().format()

function lxNowTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

export default lxNowTime
