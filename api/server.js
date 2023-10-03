// See https://github.com/typicode/json-server#module
require('dotenv').config({path:'../.env'})

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 5000

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is running on ' + port)
})

// Export the Server API
module.exports = server
