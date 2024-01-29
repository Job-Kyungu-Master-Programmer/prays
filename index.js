const config = require('./utils/config')
// const app = require('./app')
const logger = require('./utils/logger')

const  express = require('express')
const app = express()

app.get('/', (request, response) => {
     response.send('<h1>Node js project')
})

const PORT = process.env.PORT || config.PORT

app.listen(PORT, () => {
     logger.info(` Server running on PORT ${PORT} `)
})