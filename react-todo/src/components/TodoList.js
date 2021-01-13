import React, { Component } from "react";
import axios from 'axios';

//import Components
import Todo from "./Todo"
import TodoForm from "./TodoForm"

/*
  TodoMVC ✔️
  1. display todos
  2. add todo 
  3. cross off todo 
  4. show number of active todos
  5. delete todo
  <--- EXTRA CREDIT 👇 ---> 
  6. filter all/active/complete 
  7. delete all complete
    7.1 only show if atleast one is complete 
  8. button to toggle all on/off 

  https://appian-mock.herokuapp.com/todos
*/

class TodoList extends Component {
  
  // setting up initial state
  state={
    todos: []
  };

  //used to fetch data after component renders
  componentDidMount(){
    axios.get('https://appian-mock.herokuapp.com/todos')
    .then((res)=>{
      // console.log(res.data)
      this.setState({
        todos: res.data
      })
    })
  }

  // function that passed to grab todo from child
  // this is lifting the state
  addTodo = (todo) => {
    console.log(todo)
    this.setState((state) => ({
      //creating a copy of the todos array and a new value to the front
      todos: [todo, ...state.todos]
    }))
  }

  // function that is passed an id and toggles the compete field from false to true or true to false
  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo)=>{
        //check if each id is equal to the id that we passed
        if(todo.id === id){
          //if they match(true) toggle the complete value to true or false
          return{
            ...todo,
            compete: !todo.compete
          };
        } else {
          return todo;
        }
      })
    }))
  }

  deleteTodo = (id) => {
    this.setState((state) => ({
      // filter out each todo in a new array that doesn't equal to the id being passed
      todos: state.todos.filter((todo)=> todo.id !== id)
    }))
  }


  render() {
    return <div>
      <TodoForm addTodo={this.addTodo} />
      {this.state.todos.map((todo, i) => (
        //mapping through the array of todos in the state
        <Todo key={todo.id} 
          text={todo.text} 
          compete={todo.compete} 
          toggleComplete={()=> this.toggleComplete(todo.id)}
          deleteTodo={()=> this.deleteTodo(todo.id)} />
      ))}
      <div>
        todos left: {this.state.todos.filter((todo)=> !todo.compete).length}
      </div>  
    </div>;
    // filter out all of the NOT completed todos in a new array and get the length
  }
}

export default TodoList;
