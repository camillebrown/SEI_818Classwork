import React from 'react'
import './App.css';
import { Route } from 'react-router-dom' 

import Home from './components/Home'
import StarshipPage from './components/StarshipPage'

function App() {

  return (
    <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/starship' component={StarshipPage} />
    </div>
  );
}

export default App;
