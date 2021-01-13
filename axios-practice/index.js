require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')


app.get('/', (req, res) =>{
    // axios.get('http://www.google.com')
    // .then(response=>{
    //     console.log(response.data)
    //     res.send(response.data)
    // })
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=Star+Wars`)
    .then((response)=>{
        res.send(response.data)
    })
    .catch(err=>{
        console.log(err)
    })
})


app.listen(process.env.PORT,()=>{
    console.log('we in there')
})