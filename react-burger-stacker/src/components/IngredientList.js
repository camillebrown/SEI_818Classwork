import React, {useState} from "react";

//import Components
import Ingredient from "./Ingredient"

const IngredientList = ({ingredients, addToStack}) => {

  return (
    <div>
      {ingredients.map((ingredient, i) => (
        //mapping through the array of ingredients in the state
        <Ingredient key={i} 
          ingredient={ingredient}
          name={ingredient.name} 
          color={ingredient.color}
          addToStack={()=> addToStack(ingredient)}
          />
      ))}
    </div>
  )
};

export default IngredientList;
