import React, {useState} from 'react'
import shortid from 'shortid'

/* 
  Converting to hooks
  1. Convert from Class to functional component
  2. Remove the render
  3. Import useEffect and useState
  4. Change initial state with useState
  5. Change our functions into consts
  6. Remove the 'this' and 'state'
  7. Replace this.setState with setText
*/

const TodoForm = ({addTodo}) => {

    const [text, setText] = useState(" ")

    const handleChange = event => {
        setText(event.target.value)
    }

    const handleSubmit = event => {
        // prevent the page from refreshing/reloading
        event.preventDefault()
        addTodo({
            id: shortid.generate(),
            text: text,
            compete: false
        })
    }
    
    console.log(text)
    return(
        <form onSubmit={handleSubmit}>
            <input name="text" value={text} onChange={handleChange} placeholder="todo..."/>
            <button onSubmit={handleSubmit}>Add Todo</button>
        </form>
    )
}

export default TodoForm