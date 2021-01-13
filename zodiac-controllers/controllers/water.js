const express = require('express')
const router = express.Router()

router.get('/pisces', (req, res) =>{
    res.render('./water/pisces.ejs')
})

router.get('/scorpio', (req, res) =>{
    res.render('./water/scorpio.ejs')
})

router.get('/cancer', (req, res) =>{
    res.render('./water/cancer.ejs')
})

module.exports = router