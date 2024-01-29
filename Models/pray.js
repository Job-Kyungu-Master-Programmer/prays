const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const praySchema = new mongoose.Schema({
    title: String,
    content: String,
    formDate: String,
    fromTime: String,
    important: Boolean,
    toTime: String,
    like: Number,
    day: Number,
    month: Number,
    years: Number, 
    hours: Number,
    minutes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

praySchema.set('toJSON', {
    transform: (document, object) => {
        object.id = object._id.toString()
        delete object._id
        delete object.__v
    }
})

module.exports = mongoose.model('Pray', praySchema)