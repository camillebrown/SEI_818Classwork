require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 8000;
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

// GET / - main index of site
app.get('/', function(req, res) {
  const pokemonUrl = 'http://pokeapi.co/api/v2/pokemon?limit=24';
  // Use request to call the API
  axios.get(pokemonUrl).then( function(apiResponse) {
    const pokemon = apiResponse.data.results;
    // console.log(pokemon)
    res.render('index', {pokemon: pokemon.slice(0, 151) });
  })
});

// Imports all routes from the pokemon routes file
app.use('/pokemon', require('./routes/pokemon'));

const server = app.listen(port, function() {
  console.log('...listening on', port );
});

module.exports = server;