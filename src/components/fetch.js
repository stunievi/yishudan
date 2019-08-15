import Config from './config'

var getData = {
  // to get ordinary data
  getData: (path, data = '') => {
    return new Promise((resolve, reject) => {
      fetch(Config.Url + path + data, {
        headers: {
          'content-type': 'application/json'
          // 'Origin': 'http://127.0.0.1:8080/'
        },
        method: 'GET'
      }).then(R => {
        R.json().then(R => {
          // {"statu":"success","msg":"","result":[jpg","jpg",".jpg"]}
          if (R.statu === 'success') {
            resolve(R.result)
          } else {
            reject(R.msg)
          }
        })
      }).catch(E => {
        reject(E)
      })
    })
  },
  // ordinary post
  postData: (path, data = null) => {
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
          // {"statu":"success","msg":"","result":[jpg","jpg",".jpg"]}
          if (R.statu === 'success') {
            resolve(R.result)
          } else {
            reject(R.msg)
          }
        })
      }).catch(E => {
        reject(E)
      })
    })
  }
}

export default getData
