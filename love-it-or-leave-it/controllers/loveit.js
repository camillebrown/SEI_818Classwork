const express = require('express')
const router = express.Router()

router.get('/animals', (req, res)=>{
    res.render('./loveit/animals.ejs', {animals: ['cats', 'dogs', 'elephants', 'giraffes', 'jaguars']})
})

router.get('/foods', (req, res)=>{
    res.render('./loveit/foods.ejs', {foods: ['chocolate', 'salad', 'wings', 'pizza', 'nachos']})
})

module.exports = router;