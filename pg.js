const axiosRequest = require('axios')

let res = axiosRequest.get('https://www.boredapi.com/api/activity/')
console.log(res)