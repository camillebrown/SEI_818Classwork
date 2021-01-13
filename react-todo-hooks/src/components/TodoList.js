import React, {useEffect, useState} from "react";
import axios from 'axios';

//import Components
import Todo from "./Todo"
import TodoForm from "./TodoForm"

/*
  TodoMVC ✔️
  1. display todos ✔️
  2. add todo ✔️
  3. cross off todo ✔️
  4. show number of active todos ✔️
  5. delete todo ✔️
  <--- EXTRA CREDIT 👇 ---> 
  6. filter all/active/complete 
  7. delete all complete
    7.1 only show if atleast one is complete 
  8. button to toggle all on/off 

  https://appian-mock.herokuapp.com/todos
*/


/* 
  Converting to hooks
  1. Convert from Class to functional component
  2. Remove the render
  3. Import useEffect and useState
  4. Change initial state with useState
  5. Chane componentDidMount into useEffect
  6. Change our functions into consts
  7. Remove the 'this' and 'state'
  8. Replace this.setState with setTodos
*/
const TodoList = () => {
  
  // setting up initial state
  const [todos, setTodos] = useState([])

  // //used to fetch data after component renders
  // componentDidMount(){
  //   axios.get('https://appian-mock.herokuapp.com/todos')
  //   .then((res)=>{
  //     // console.log(res.data)
  //     this.setState({
  //       todos: res.data
  //     })
  //   })
  // }

  //useEffect runs everytime the component loads
  useEffect(()=>{
    axios.get('https://appian-mock.herokuapp.com/todos').then((res)=>{
      setTodos(res.data)
    })
  },[])

  // function that passed to grab todo from child
  // this is lifting the state
  const addTodo = (todo) => {
    console.log(todo)
    //creating a copy of the todos array and a new value to the front
    setTodos([todo, ...todos])
  }

  // function that is passed an id and toggles the compete field from false to true or true to false
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo)=>{
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
    )
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo)=> todo.id !== id)
    )
  }

  // console.log("@@@@-STATE", todos)
    return( 
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, i) => (
        //mapping through the array of todos in the state
        <Todo key={todo.id} 
          text={todo.text} 
          compete={todo.compete} 
          toggleComplete={()=> toggleComplete(todo.id)}
          deleteTodo={()=> deleteTodo(todo.id)} />
      ))}
      <div>
        todos left: {todos.filter((todo)=> !todo.compete).length}
      </div>  
    </div>
    // filter out all of the NOT completed todos in a new array and get the length
    )

}

export default TodoList;
