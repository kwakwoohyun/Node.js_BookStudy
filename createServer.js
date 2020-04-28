const http = require('http')

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node</h1>')
})
server.listen(3000)

server.on('listening', () => {
    console.log('3000번 포트에서 서버 대기중입니다.')
})

server.on('error', (error) => {
    console.error(error)
})