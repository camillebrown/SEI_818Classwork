import React from 'react'

const PlayerContent = (props) =>{
    return(
        <div>
            <button
            onClick={()=>{
                props.updateSelectedPlayer(props.playerName)
            }}>
                {props.playerName}
            </button>
        </div>
    )
}

export default PlayerContent