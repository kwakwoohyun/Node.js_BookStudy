/*
    util
    각종 편의 기능을 모아둔 모듈이다. 
*/

const util = require('util')
const crypto = require('crypto')

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y)
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!')
dontUseMe(1, 2)

const randomBytesPromise = util.promisify(crypto.randomBytes)
randomBytesPromise(64).then((buf) => {
    console.log(buf.toString('base64'))
}).catch((error) => {
    console.log(error)
})