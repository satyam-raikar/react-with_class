import React from "react";
import todoData from "./todoData"
import TodoItem from "./TodoItem"
import "./style.css";

export default class App extends React.Component{

  constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
  }
 
 handleChange(id){
   this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })

 }
  
render(){

const todoItems = this.state.todos.map(item => <TodoItem key ={item.id} item ={item} handleChange={this.handleChange} />)

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
         {todoItems}
    </div>
  )

}
}

