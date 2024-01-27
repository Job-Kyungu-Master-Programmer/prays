const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    occupation: String,
    country: String,
    mail: String,
    passwordHash: String,
    prays: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pray'
        }
    ],
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, object) => {
        object.id = object._id.toString()
        delete object._id
        delete object.__v
        delete object.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User