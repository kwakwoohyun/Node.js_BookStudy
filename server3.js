
const http = require('http')

const parseCookies = (cookie = '') => cookie.split(';').map(v => v.split('=')).map(([k, ...vs]) => [k, vs.join('=')]).reduce((acc, [k, v]) => {
    acc[k.trim()] = decodeURIComponent(v)
    return acc
}, {})

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie)
    console.log(req.url, cookies)
    console.log(req.headers.cookie)
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' })
    res.end('Hello Cookie')
}).listen(3000, () => {
    console.log('3000번 포트에서 서버 대기중')
})