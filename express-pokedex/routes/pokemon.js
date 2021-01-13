const express = require('express');
const router = express.Router();
const db = require('../models')
const axios = require('axios'); 

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.pokemon.findAll()
  .then((favorites)=>{
      res.render('faves', {favorites: favorites})
  })
  db.pokemon.destroy({
    where: {
      name: req.query.name
    }
  })
  .then(numRowsDeleted=>{
    console.log(numRowsDeleted)
    res.redirect('/pokemon')
  })
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // TODO: Get form data and add a new record to DB
  console.log('Form Data: ', req.body)
  db.pokemon.create(req.body)
  .then(createdFave=>{
    res.redirect('/pokemon')
    console.log(createdFave)
  })
})

// GET /pokemon/:id - renders a show page with information about the Pokemon with the corresponding row id.
router.get('/:id', function(req, res) {
  let pokeid = req.params.id
  let pokemonUrl = `http://pokeapi.co/api/v2/pokemon/${pokeid}`;
  axios.get(pokemonUrl)
  .then((apiResponse)=>{
    const pokemon = apiResponse.data;
    const abilities = pokemon.abilities
    console.log(pokemon)
    res.render('show', {pokemon: pokemon, abilities: abilities});
  });
})

module.exports = router;
