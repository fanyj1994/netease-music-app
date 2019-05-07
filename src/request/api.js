import axios from 'axios'

const baseURL = 'http://localhost:4000'

axios.defaults.withCredentials = true

function checkAPIStatus(res) {
  if (res.code >= 200 && res.code < 300) {
    return res
  }
  return res
}

export default {
  async get(url, params) {
    try {
      if (!url) return
      let response = await axios({
        method: 'get',
        url: baseURL + url,
        params,
        timeout: 30000
      }).then(checkAPIStatus)
      return response
    } catch(error) {
      console.error('error', error)
    }
  }
}
