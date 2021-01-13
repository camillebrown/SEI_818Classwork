const express = require('express')
const app = express()

// app.set(name, value)
//tell express that we'll use ejs as the view engine
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    //res.sendFile(<absolute file path>)  // sendFile is used for HTML
    //__dirname gets you all the way down to your current folder
    // res.sendFile(__dirname+'/views/index.html')
    res.render('index.ejs', {name: 'Sterling Archer', age: 5}) //render is used for templates
})

app.get('/about', (req, res)=>{
    // res.sendFile(__dirname+'/views/about.html')
    res.render('about.ejs', {favorites: ['candy', 'wings', 'pizza', 'chocolate']})
})

app.get('/blog', (req, res)=>{
    // res.sendFile(__dirname+'/views/blog-directory.html')
    res.render('blog-directory.ejs')
})


app.listen(8000, ()=>{
    console.log('testing this out: 8000')
})