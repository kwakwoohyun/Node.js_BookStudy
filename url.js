/*
    인터넷 주소를 쉽게 조작하도록 도와주는 모듈이다.
    url처리에는 크게 두가지 방식이 있다.

    WHATWG 방식의 url과
    url이 있다.
*/
const url = require('url')

const URL = url.URL
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor')
console.log('new URL() : ', myURL)
console.log('url.format() : ', url.format(myURL))
console.log('------------------------------')

const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor')
console.log('url.parse() : ', parsedUrl)
console.log('url.format() : ', url.format(parsedUrl))