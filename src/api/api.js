import 'whatwg-fetch'
import cookie from 'vue-cookie'

const transferToJSON = (res) => {
  return res.json()
}

const request = {
  get (url) {
    return fetch(url, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'token': this.getToken(),
        'Cache-Control': 'no-cache',
        'pragma': 'no-cache'
      }
    })
      .then(transferToJSON)
      .catch((e) => {
        throw e
      })
  },
  post (url, data) {
    console.log(data)
    return fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': this.getToken()
      },
      body: JSON.stringify(data)
    })
      .then(transferToJSON)
      .catch((e) => {
        throw e
      })
  },
  getToken () {
    return cookie.get('token')
  }
}
export default request
