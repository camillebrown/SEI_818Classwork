import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component {
  render(){
    return (
      <>
        <Movie
          title="The Fellowship of the Ring"
          hours="2"
          minutes="58" 
        />
        <Movie
          title="The Two Towers"
          hours="2"
          minutes="59" 
        />
        <Movie
          title="The Return of the King"
          hours="3"
          minutes="21" 
        />
      </>  
    );
  }
}

export default App;
