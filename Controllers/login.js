const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../Models/user')


// Login user for authentification 
loginRouter.post('/', async (request, response) => {
    const { mail, password } = request.body

    const user = await User.findOne({ mail })
    const passwordCorrect = user === null ? false 
                                          : await bcrypt.compare(password, user.passwordHash)
    if(!(passwordCorrect)) {
         return response.status(401).json({error: 'Invalid password please '})
    }

    //passing infos token for user
    const userForToken = {
        mail: user.mail,
        id: user._id
    }

    //create token jwt and SECRET
    const token = jwt.sign(userForToken, process.env.SECRET_JWT)
    response.status(200).send({
        token,
        name: user.name,
        mail: user.mail, 
        username: user.username, 
        occupation: user.occupation, 
        country: user.country,
        phone: user.phone,
        age: user.age
    })

})

module.exports = loginRouter