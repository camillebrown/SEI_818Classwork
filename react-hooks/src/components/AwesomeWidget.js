import React, {useState, useEffect} from 'react';

const AwesomeWidget = () => {
    
    // setState takes our initial array, it returns an array of two items
    // first being the name of the initial state ('count')
    // second returning something like setState but specific to our count (equalivalent of this.setState)

    const [count, setCount] = useState(0)
    const [user, setUser] = useState({name: 'Camille', age: "27"})

    useEffect(()=>{
        console.log('A render')
        document.title = `Hello, ${user.name}`
        // when you create dependencies, you add it within array brackets
        // this will only happen when the state changes for whatever is added as a dependency ('user' in this case)
    }, [user])

    //handle increase count
    const handleIncrease = () => {
        setCount(count + 1)
    }

    // handle name change
    const handleName = () => {
        setUser({...user, name: "Karlie"})
    }

    return (
        <div>
            <p> This is your count: {count}</p>
            <button 
                onClick={handleIncrease}>Up that count!
            </button>
            <p>Username is {user.name} and he/she is {user.age} years old.</p>
            <button onClick={handleName}>Change Name</button>
        </div>
    )
}

export default AwesomeWidget