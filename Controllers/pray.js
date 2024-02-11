const prayRouter = require('express').Router()
const Pray = require('../Models/pray')
const User = require('../Models/user')
const jwt = require('jsonwebtoken')


//limitation de creat* des requete par des users connectes
const getToken = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.startsWith('Bearer')) {
        return authorization.replace('Bearer ', '')
    }
}

//routes 
prayRouter.get('/', async (request, response) => {
    // const prayer = await Pray.find({})
    // .populate('user', {name: 1})
    // response.json(prayer)


    //Afficher uniquement les notes user connecter
    const token = getToken(request)
    let userId;
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_JWT)
      userId = decodedToken.id;
    } catch (err) {
       return response.status(401).json({error: 'token invalid'})
    }

    //Afficher toutes les notes creer par l'user
    const prayers = await Pray.find({user: userId})
    response.json(prayers)

})

prayRouter.get('/:id', async (request, response) => {
    const prayer = await Pray.findById(request.params.id)
    response.json(prayer)
})
// Update Like in Prayer
prayRouter.put('/:id', async (request, response) => {
    const body = request.body

    const updateLike = {
      title: body.title,
      content: body.content,
      formDate: body.formDate,
      fromTime: body.fromTime,
      important: body.important,
      toTime: body.toTime,
      like: body.like,
      day: body.day,
      month: body.month,
      years: body.years, 
      hours: body.hours,
      minutes: body.minutes,
    }

    const savedUpdate = 
      await Pray.findByIdAndUpdate(request.params.id, updateLike, { new : updateLike.like })
     response.json(savedUpdate)
})

//Update Prayer
prayRouter.put('/:id', async (request, response) => {
     const body = request.body

     const updatePrayer = {
      title: body.title,
      content: body.content,
      formDate: body.formDate,
      fromTime: body.fromTime,
      important: body.important,
      toTime: body.toTime,
      like: body.like,
      day: body.day,
      month: body.month,
      years: body.years, 
      hours: body.hours,
      minutes: body.minutes,
     }

     const updating = 
        await Pray.findByIdAndUpdate(request.params.id, updatePrayer, {new: true})
      response.json(updating)
})

//delete
prayRouter.delete('/:id', async (request, response) => {
     const prayer = await Pray.findByIdAndDelete(request.params.id)
     response.json(prayer)
})


prayRouter.post('/', async (request, response) => {
    const body = request.body

   try {
    const decodedToken = jwt.verify(getToken(request), process.env.SECRET_JWT)
    if(!decodedToken.id) {
         return response.status(401).json({error: 'Invalid token '})
    }
    
    const user = await User.findById(decodedToken.id)
   
   const note = new Pray({
     title: body.title,
     content: body.content,
     formDate: body.formDate,
     fromTime: body.fromTime,
     important: body.important,
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
   } catch {
    return response.status(401).json({error: 'Invalid token'});
   }
})

module.exports = prayRouter