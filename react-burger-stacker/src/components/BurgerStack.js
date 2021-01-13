import React from 'react'

const BurgerStack = ({name, color}) => {

    return (
        <div style={{color: color}}>
            {name}
        </div>
    )
}   

export default BurgerStack