const express = require('express')
const router = express.Router()

router.get('/water', (req, res) =>{
    res.render('./signs/water.ejs', {waterSigns: ['Pisces', 'Cancer', 'Scorpio']})
})

router.get('/air', (req, res) =>{
    res.render('./signs/air.ejs', {airSigns: ['Aquarius', 'Gemini', 'Libra']})
})

router.get('/fire', (req, res) =>{
    res.render('./signs/fire.ejs', {fireSigns: ['Aries', 'Leo', 'Sagittarius']})
})

router.get('/earth', (req, res) =>{
    res.render('./signs/earth.ejs', {earthSigns: ['Virgo', 'Taurus', 'Capricorn']})
})

module.exports = router;