import React, {Component} from 'react'
import shortid from 'shortid'

class TodoForm extends Component {

    state = {
        text: ''
    }

    handleChange = event => {
        this.setState({
            //putting event.target.name in array brackets tells us to go find the value that matches the keyin the object of state
            //otherwise it would look for a key named event.target.name
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        // prevent the page from refreshing/reloading
        event.preventDefault()
        this.props.addTodo({
            id: shortid.generate(),
            text: this.state.text,
            compete: false
        })
    }
    
    
    render(){
        console.log(this.state.text)
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="todo..."/>
                <button onSubmit={this.handleSubmit}>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm