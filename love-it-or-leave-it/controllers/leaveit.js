const express = require('express')
const router = express.Router()

router.get('/movies', (req, res)=>{
    res.render('./leaveit/movies.ejs', {movies: ['Django Unchained', 'Titanic', 'Peeples']})
})

router.get('/products', (req, res)=>{
    res.render('./leaveit/products.ejs', {products: ['Cottage Cheese', 'Heelys', 'Green eyeliner']})
})

module.exports = router;