import http from 'node:http'

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res.end('Users list')
    }

    if (method === 'POST' && url === '/users') {
        return res.end('Create user')
    }

    return res.end('Hello World')
})

server.listen(3333)