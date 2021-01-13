const express = require('express')
const router = express.Router()
const fs = require('fs')

// -----------> PHC index route <-----------
router.get('/', (req, res)=>{
    //this reads the dinosaurs JSON file as a text file
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    //this converts the text (string) into a JS 'object' we can grab data from
    let phcData = JSON.parse(prehistoric_creatures)
    res.render('./prehistoric_creatures/index.ejs', {prehistoric_creatures: phcData})
})

// -----------> PHC post route <-----------
router.post('/', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    let phcData = JSON.parse(prehistoric_creatures)
    phcData.push(req.body) // push the new dino to the array

    //write the newly updated dinoData array back to the dinosaurs.json file
    //.stringify turns it back to text
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(phcData))

    //redirect to the GET /dinosaurs route (index) after the data has been submitted and stored back in the JSON file
    res.redirect('/prehistoric_creatures')
})

// -----------> PHC new route <-----------
router.get('/new', (req, res)=>{
    res.render('./prehistoric_creatures/new.ejs')
})

// ----------> PHC show route <-----------
router.get('/:idx', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    let phcData = JSON.parse(prehistoric_creatures)
    //get array index from url parameter
    let phcIndex = req.params.idx
    res.render('./prehistoric_creatures/show.ejs', {creature: phcData[phcIndex], phcId: phcIndex})
})

// ----> PHC GET EDIT ROUTE <------
router.get('/edit/:idx', (req, res)=>{
    // res.send(`You\'ve hit the GET edit route for dino #${req.params.idx}`)
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    let phcData = JSON.parse(prehistoric_creatures)
    res.render('./prehistoric_creatures/edit.ejs', {creature: phcData[req.params.idx], phcId: req.params.idx})
})

// ----> PHC PUT ROUTE <------
router.put('/:idx', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    let phcData = JSON.parse(prehistoric_creatures)
    phcData[req.params.idx].type = req.body.type
    phcData[req.params.idx].img_url = req.body.img_url
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(phcData))
    res.redirect('/prehistoric_creatures/'+req.params.idx)
})

// ----> PHC DELETE ROUTE <------
router.delete('/:idx', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    let phcData = JSON.parse(prehistoric_creatures)
    //remove the deleted dino from the dinosaurs array
    phcData.splice(req.params.idx, 1)
    //save the new dinosaurs to JSON file
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(phcData))
    res.redirect('/prehistoric_creatures')
})

module.exports = router;