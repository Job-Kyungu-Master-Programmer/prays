const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../Models/user')
const nodemailer = require('nodemailer');

//configuration for nodeMailer
// transporter e-mail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joblodo97@gmail.com',
        pass: 'ajrnzbqreihbplwk'
    }
});


usersRouter.post('/', async (request, response) => {
    const { name, username, phone, age, occupation, country, mail, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    
    const authUser = new User({
        name,
        username,
        occupation, 
        country, 
        mail,
        country,
        phone,
        age,
        passwordHash
    })

    const savedUser = await authUser.save()

    // codes for nodeMailerlet mailOptions 
     let mailOptions = {
        from: 'joblodo97@gmail.com',
        to: savedUser.mail,
        subject: 'Account Creation Confirmation',
        text: `Bonjour cher ${savedUser.name},\n\n vous avez bien creer votre compte avec sucess. ${savedUser.mail}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
           console.log(error);
        } else {
           console.log('Email sent: ' + info.response);
        }
    });

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