import React from 'react'
import BurgerStack from './BurgerStack.js'

const BurgerPane = ({burgerStack, clearBurger}) => {

    return (
      <>
        {burgerStack.map((ingredient, i) => (
          //mapping through the array of ingredients in the state
          <BurgerStack key={i} 
            name={ingredient.name}
            color={ingredient.color}
            />
        ))}
      <div className="stack-area">
          <p>--------------------------</p>
        <h2>Burger Stacking Area</h2>  
        <button onClick={clearBurger}>CLEAR</button>
        </div> 
      </>
    )
  };

export default BurgerPane