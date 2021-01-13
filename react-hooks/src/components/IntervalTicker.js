import React, { useState, useEffect} from 'react';

const InterValTicker = () => {
    const [handle, setHandle] = useState(null)

    useEffect(() => {
        // This line starts an interval and stores the returned handle in state
        setHandle( setInterval(() => console.log('tick'), 1000) )
        // This line returns a function that clears the interval
        return () => {
          clearInterval(handle)
        }
      }, []) // Don't forget the empty dependency list
      
    return (
        <div>
        Yada Yada Yada
        </div>
    )
}

export default InterValTicker