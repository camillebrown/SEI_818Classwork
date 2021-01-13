// this is a 'Class Component'
// import the Component class from React library

import React, {Component} from 'react'
import Kitten from './Kitten.js'
import Quote from './Quote.js'

//defind our Hello component
class Hello extends Component {
  // what should the component render?
  render(){
    const faveAnimals = this.props.animals.map(animal=>{
      return <li>{animal}</li>
    })
    // return some ui to display to the page
    return(
      <>
        <h1>Hello {this.props.name}!</h1>
        <h2>You are {this.props.age} years old.</h2>
        <ul>
          {faveAnimals}
        </ul>
        <Kitten />
        <Quote />
        <Kitten />
        <Quote />
      </>  
    )
  }
}

export default Hello