const config = require('./utils/config')
const app = require('./app')
const logger = require('./utils/logger')


const PORT = process.env.PORT || config.PORT
app.listen(PORT, () => {
     logger.info(` Server running on PORT ${PORT} `)
})