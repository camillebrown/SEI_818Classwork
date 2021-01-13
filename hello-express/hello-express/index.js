// import the express module
const express = require('express')
// create an instance of an express app
const app = express()

// home route
// get takes 2 arguments
app.get('/', (req, res)=>{
    res.send('Hello, World!')
    //res.send is used to send text
    // res.sendFile()
    // res.sendFile allows you to send an actual file
    // res.render()
    // res.render allows you to grab all the data and render it into an HTML file / used for dynamic or changing data
    // res.json()
})

app.listen(8000, ()=>{
    console.log('You\'re listening to the smooth sounds of port 8000.')
})

