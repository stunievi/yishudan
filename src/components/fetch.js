import Config from './config'

var getData = {
  // to get ordinary data
  getData: (path, data = null) => {
    // console.log(data.user, data.password)
    return new Promise((resolve, reject) => {
      // fetch(Data.Url + '/api/user', {
      fetch(Config.Url + path, {
        headers: {
          'content-type': 'application/json'
          // 'Origin': 'http://127.0.0.1:8080/'
        },
        method: 'GET'
        // body: 'token=1213121'
      }).then(R => {
        R.json().then(R => {
          // eslint-disable-next-line no-undef
          // console.log(E)
          // {"statu":"success","msg":"","result":[jpg","jpg",".jpg"]}
          if (R.statu === 'success') {
            resolve(R.result)
          } else {
            reject(R.msg)
          }
        })
      }).catch(E => {
        // eslint-disable-next-line no-console
        console.log(E)
        reject(E)
      })
    })
  },
  postData: (path, data = null) => {
    // console.log(data.email, data.password)
    return new Promise((resolve, reject) => {
      // fetch(Data.Url + '/api/user', {
      fetch(Config.Url + path, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
          // 'content-type': 'application/json',
          // 'Accept': 'application/json'
          // 'Origin': 'http://127.0.0.1:8080/'
        },
        method: 'POST',
        body: data
      }).then(R => {
        R.json().then(R => {
          // eslint-disable-next-line no-undef
          // console.log(E)
          // {"statu":"success","msg":"","result":[jpg","jpg",".jpg"]}
          if (R.statu === 'success') {
            resolve(R.result)
          } else {
            reject(R.msg)
          }
        })
      }).catch(E => {
        // eslint-disable-next-line no-console
        console.log(E)
        reject(E)
      })
    })
  }
}
export default getData
