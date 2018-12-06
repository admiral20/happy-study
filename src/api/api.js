import 'whatwg-fetch'
import cookie from 'vue-cookie'

const request = {
  get (url) {
    return fetch(url, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'token': this.getToken() ? this.getToken() : '',
        'Cache-Control': 'no-cache',
        'pragma': 'no-cache'
      }
    })
      .then()
      .catch((e) => {
        throw e
      })
  },
  post (url, data) {
    return fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': this.getToken() ? this.getToken() : ''
      },
      body: JSON.stringify(data)
    })
      .then()
      .catch((e) => {
        throw e
      })
  },
  getToken () {
    return cookie.get('token')
  }
}
export default request
