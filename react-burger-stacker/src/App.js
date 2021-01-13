import React, {useState} from 'react';

// Components imports
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

// CSS imports
import "./css/App.css";

const App = () => {

  // setting up initial state
  const [ingredients, setIngredients] = useState(
    [
      { name: "Kaiser Bun", color: "saddlebrown" },
      { name: "Sesame Bun", color: "sandybrown" },
      { name: "Gluten Free Bun", color: "peru" },
      { name: "Lettuce Wrap", color: "olivedrab" },
      { name: "Beef Patty", color: "#3F250B" },
      { name: "Soy Patty", color: "#3F250B" },
      { name: "Black Bean Patty", color: "#3F250B" },
      { name: "Chicken Patty", color: "burlywood" },
      { name: "Lettuce", color: "lawngreen" },
      { name: "Tomato", color: "tomato" },
      { name: "Bacon", color: "maroon" },
      { name: "Onion", color: "darkgoldenrod" },
      { name: "Cheese", color: "orange" },
      { name: "Pickles", color: "green" },
    ]
  )

  // console.log(ingredients)

  const [burgerStack, setBurgerStack] = useState([])

  const addToStack = (ingredient) => {
    // console.log(ingredient)
    // event.preventDefault();
    setBurgerStack([ingredient, ...burgerStack])
    console.log(burgerStack)

  }

  const clearBurger= () => {
    setBurgerStack([])
    // console.log(burgerStack)
  }

  return (
    <div className="App">
      <div className="column">
        <IngredientList className="column" ingredients={ingredients} addToStack={addToStack}/>
      </div>  
      <div className="column">
        <BurgerPane className="column" burgerStack={burgerStack} clearBurger={clearBurger}/>
        </div>  
     </div>
  )
}

export default App;
