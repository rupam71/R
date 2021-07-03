const mongoose = require('mongoose')
const User = require('../models/user')

module.exports = app => {
    // sign up
    app.post('/api/users/signup',async (req,res)=>{
        const user = new User (req.body)
        
        try {
            await user.save()
            res.status(201).send({user})

            } catch(e){
            res.status(400).send(e)
            res.redirect('/')
        }
    })

     //login
     app.post('/api/users/login', async (req,res) => {
        try {
            const user = await User.findByCredential(req.body.email, req.body.password)
            
            res.send({ user })
        } catch(e) {
            res.status(400).send(e)
            console.log(e)
        }
    })

}