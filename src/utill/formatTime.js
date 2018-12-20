import moment from 'moment'
export default {
  formatTime (data) {
    let nowTime = moment()
    let creat = moment(data)
    if ((nowTime - creat) / 1000 < 60) {
      return '刚刚'
    } else if ((nowTime - creat) / 1000 < 3600) {
      return `${parseInt((nowTime - creat) / 1000 / 60)}分钟前`
    } else if ((nowTime - creat) / 1000 < 86400) {
      return `${parseInt((nowTime - creat) / 1000 / 3600)}小时前`
    } else if ((nowTime - creat) / 1000 < 172800) {
      return '昨天'
    } else if ((nowTime - creat) / 1000 < 604800) {
      return `${parseInt((nowTime - creat) / 1000 / 86400)}天前`
    } else if ((nowTime - creat) / 1000 < 2592000) {
      return `${moment(data).format('M月D日')}`
    } else {
      return data
    }
  }
}
