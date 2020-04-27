/*
    crypto
    다양한 방식의 암호화를 도와주는 모듈이다.
*/

const crypto = require('crypto')

console.log('base64 : ', crypto.createHash('sha512').update('비밀번호').digest('base64'))
console.log('hex : ', crypto.createHash('sha512').update('비밀번호').digest('hex'))
console.log('base64 : ', crypto.createHash('sha512').update('다른비밀번호').digest('base64'))


/*
    양방향 암호화 (복호화 가능)
*/

const cipher = crypto.createCipher('aes-256-cbc', '열쇠')
let result = cipher.update('암호화할 문장', 'utf8', 'base64')
result = result + cipher.final('base64')
console.log('암호화 : ', result)

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠')
let result2 = decipher.update(result, 'base64', 'utf8')
result2 = result2 + decipher.final('utf8')
console.log('복호화 : ', result2)