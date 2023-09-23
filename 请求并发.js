const axios = require('axios')
/*
urls:[]
limit:number
*/
const concurrency = (urls, limit) => {
  const result = []
  // 用来判断首次请求次数
  let count = 0
  // 用来判断是否亲求完毕
  let completed = 0
  // 请求总条数
  const len = urls.length
  // 判断请求长度
  if (len === 0) return Promise.resolve([])
  // 返回Promise
  return new Promise((resolve) => {
    const next = () => {
      if (count === len) return
      let current = count++
      axios
        .get(urls[current])
        .then((res) => {
          result[current] = { result: res.data }
        })
        .catch((err) => {
          result[current] = { error: err }
        })
        .finally(() => {
          // 判断是否结束
          if (++completed === len) {
            resolve(result)
          } else {
            // 每次请求完毕再加入一个请求
            next()
          }
        })
    }
    // 第一次进来先进行limit请求
    // 因为每次nex里会对count进行++
    while (count < limit) {
      next()
    }
  })
}

const urls = new Array(10).fill('https://www.baidu.com')
concurrency(urls, 3).then(console.log)
