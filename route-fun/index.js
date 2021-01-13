const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello, World! We\'re playing with routes today');
});

app.get('/about', (req, res)=> {
    res.send('This is a practice app to learn about express routes.')
})

app.get('/querystring', (req, res)=>{
    let printout = ' '
    for(let key in req.query){
        printout += key + ": "+req.query[key]+"<br/>"
    }
    res.send(printout)
})

app.get('/:name', (req, res) =>{
    console.log("req.params:", req.params)
    res.send ("Our parameter is "+req.params.name)
})

app.get('/greet/:name/:lastname', (req, res) => {
    res.send('Hello '+req.params.name+' '+req.params.lastname+'!')
})

app.get('/multiply/:x/:y', (req, res) =>{
    res.send('The answer is: '+(req.params.x*req.params.y))
})

app.get('/add/:x/:y', (req, res) =>{
    res.send('The answer is: '+ (parseInt(req.params.x) + parseInt(req.params.y)))
})


app.listen(8000, ()=>{
    console.log('You\'re listening to the smooth sounds of port 8000.')
});