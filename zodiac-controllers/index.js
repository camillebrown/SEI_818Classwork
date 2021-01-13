const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use('/signs', require('./controllers/signs'))
app.use('/signs/water', require('./controllers/water'))
app.use('/signs/fire', require('./controllers/fire'))
app.use('/signs/air', require('./controllers/air'))
app.use('/signs/earth', require('./controllers/earth'))

app.get('/', (req, res) =>{
    res.render('index.ejs')
})

app.listen(8000, ()=>{
    console.log('8000 is on')
})