import React, {Component} from 'react'
import './App.css';

class App extends Component {
  render(){
    return(
      <>
        <h1>{this.props.title}</h1>
        <h3>Author: {this.props.author}</h3>
        <p>{this.props.body}</p>
      </>
    )
  }
}

export default App;
