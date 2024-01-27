const express = require('express')
const app = express()
const config = require('./utils/config')
const cors = require('cors')
const prayRouter = require('./Controllers/pray')
const usersRouter = require('./Controllers/user')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI)
.then(result => {
    logger.info('Connected to Database')
})
.catch(error => {
    logger.error('Failed connection')
})

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/prays', prayRouter)
app.use('/api/users', usersRouter)
app.use(middleware.requestUnknow)

module.exports = app