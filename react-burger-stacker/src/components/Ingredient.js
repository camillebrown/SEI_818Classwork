import React from 'react'

const Ingredient = ({name, color, addToStack}) => {
    return (
        <div className="ings">
            <div style={{color: color, display: "inline"}}>{name}</div>
            <button className="add-btn" onClick={addToStack}>Add</button>
        </div>
    )
}

export default Ingredient