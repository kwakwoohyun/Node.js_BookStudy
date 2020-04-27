/*
    path 모듈
    폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈이다. 
    path 모듈이 필요한 이유중 하나는 운영체제별로 경로 구분자가 다르기 때문이다. 
*/


const path = require('path')

const string = __filename

console.log('path.sep : ', path.sep)
console.log('path.delimiter : ', path.delimiter)
console.log('----------------------------------')
console.log('path.dirname() : ', path.dirname(string))
console.log('path.extname() : ', path.extname(string))
console.log('path.basename() : ', path.basename(string))
console.log('path.basename() : ', path.basename(string, path.extname(string)))
console.log('----------------------------------')
console.log('path.parse() : ',path.parse(string))
