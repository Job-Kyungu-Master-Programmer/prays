const express = require('express')
const app = express()
const config = require('./utils/config')
const cors = require('cors')
const prayRouter = require('./controllers/pray')
const userRouter = require('./controllers/user')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI)
.then(result => {
    logger.info('Connected to DataBase')
}).catch(error => {
    logger.error('Failed connection')
})
mongoose.set('strictQuery', false)

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(middleware.requestLogger)
app.use('/api/prays', prayRouter)
app.use('/api/users', userRouter)
app.use(middleware.requestUnknow)

module.exports = app