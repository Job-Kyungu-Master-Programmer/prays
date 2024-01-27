const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../Models/user')
const { populate } = require('../Models/pray')


usersRouter.post('/', async (request, response) => {
    const { name, username, occupation, country, mail, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    
    const authUser = new User({
        name,
        username,
        occupation, 
        country, 
        mail,
        passwordHash
    })

    const savedUser = await authUser.save()

    response.status(201).json(savedUser)
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    .populate('prays', { content: 1 })
    response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
    const users = await User.findById(request.params.id)
    response.json(users)
})


module.exports = usersRouter