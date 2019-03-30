/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            todos: todosData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoComponents = this.state.todos.map(item => 
        <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                {todoComponents}
            </div>
        )
    }
    
}

export default App