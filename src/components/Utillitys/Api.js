 export const CallApi = (data, method, url) => {
     console.log(data)
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()
      req.open(method, url)
      req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      
      req.withCredentials = false
  
      req.onload = () => {
        if (req.status === 200 || req.status === 201 || req.status === 304) {
          resolve(JSON.parse(req.response))

        } else {

          reject(Error(req.statusText))
        }
      }
  
      req.onerror = () => {
        reject(Error('Network Error'))
      }
     console.log(data)

      req.send(JSON.stringify(data))
    })
  }