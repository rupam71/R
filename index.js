const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect(
    process.env.mongoURI, {
        useNewUrlParser: true,  
        useCreateIndex : true, 
        useUnifiedTopology: true, 
        useFindAndModify:false
    });


const app = express() 
app.use(bodyParser.json());

require('./router/user')(app)

app.get('/', (req,res) => {
    res.send('Hello World Hell')
    console.log(process.env.mongoURI)
})


if(process.env.NODE_ENV === 'production') {
    // express will serve up production assests
    // like our main.js or main.css file
    app.use(express.static('client/build'))


    // Express will serve up the indexe.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log(`Listening at port : ${PORT}`)