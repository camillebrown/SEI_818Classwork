const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Testing the Simpsons Connection')
})

app.get('/homer', (req, res) => {
    res.send('Homer Simpson is the father of the Simpson family')
})

app.get('/marge', (req, res) => {
    res.send('Marge Simpson is the mother of the Simpson family')
})

app.get('/Bart', (req, res) => {
    res.send('Bart Simpson is the son of the Simpson family')
})

app.get('/Lisa', (req, res) => {
    res.send('Lisa Simpson is the daughter of the Simpson family')
})

app.get('/maggie', (req, res) => {
    res.send('Maggie Simpson is the baby of the Simpson family')
})

app.get('/snowball-ii', (req, res) => {
    res.send('Snowball is the pet cat of the Simpson family')
})

app.get('/santas-little-helper', (req, res) => {
    res.send('Santa\'s Little Helper is the pet greyhound of the Simpson family')
})

app.listen(8000, ()=>{
    console.log('You got the Simpsons working')
})