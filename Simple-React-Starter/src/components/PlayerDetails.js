import React from 'react'

//props object = playerName here
// this is the same as passing in props

const PlayerDetails = ({playerName}) => {
    return (
        <div>
            {playerName}
        </div>
    )
}

export default PlayerDetails