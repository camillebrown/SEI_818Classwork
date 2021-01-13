const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Testing the Frasier Connection')
})


app.get('/frasier', function(req, res) {
    res.send('Once in prep school, the Existentialist Club once named me "Most Likely to Be"')
});

app.get('/niles', function(req, res) {
    res.send('You know, sometimes I wonder if I\'m not just in psychiatry for the money')
});

app.get('/daphne', function(req, res) {
    res.send('Well, have fun.  I\'m off to stick my head in the oven.')
});

app.get('/roz', function(req, res) {
    res.send('Let me make it easy for you.  Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!')
});

app.get('/martin', function(req, res) {
    res.send('You may think it\'s tough being middle-aged, but think about me.  I got a son who\'s middle-aged.')
});

app.get('/Scrappy', function(req, res) {
    res.send('woof')
});

app.listen(3000, ()=>{
    console.log('Hello, Seattle. I\'m listening...')
});