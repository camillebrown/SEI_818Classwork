const express = require('express')
const app = express()

//import express ejs layouts and call its ejsLayouts
const ejsLayouts = require('express-ejs-layouts')

//tell express that we'll use ejs as the view engine
// use & set are middleware functions. Middleware functions intercept the request object when it comes in from the client, but before it hits any route. 
app.set('view engine', 'ejs');
app.use(ejsLayouts)

app.use('/loveit', require('./controllers/loveit'))
app.use('/leaveit', require('./controllers/leaveit'))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(8000,()=>{
    console.log('testing port: 8000')
})