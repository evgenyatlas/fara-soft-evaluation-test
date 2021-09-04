const http = require('http')
const socket = require('socket.io')
const server = http.createServer()
const config = require('config')
const App = require('./app')

const io = socket(server, {
    cors: {
        origin: '*',
    }
})

const app = new App(io)
app.init()

server.listen(config.get('PORT'))