const prayRouter = require('express').Router()
const Pray = require('../Models/pray')
const User = require('../Models/user')

prayRouter.get('/', async (request, response) => {
    const prayer = await Pray.find({})
    .populate('user', {name: 1})
    response.json(prayer)
})

prayRouter.get('/:id', async (request, response) => {
    const prayer = await Pray.findById(request.params.id)
    response.json(prayer)
})


prayRouter.post('/', async (request, response) => {
    const body = request.body

  const user = await User.findById(body.userId)

  const note = new Pray({
    title: body.title,
    content: body.content,
    formDate: body.formDate,
    fromTime: body.fromTime,
    important: body.important === undefined ? false : body.important,
    toTime: body.toTime,
    like: body.like,
    day: body.day,
    month: body.month,
    years: body.years, 
    hours: body.hours,
    minutes: body.minutes,
    user: user.id
  })

  const savedNote = await note.save()
  user.prays = user.prays.concat(savedNote._id)
  await user.save()
  
  response.status(201).json(savedNote)
})

module.exports = prayRouter