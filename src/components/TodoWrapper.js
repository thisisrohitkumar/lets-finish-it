import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
uuidv4()

export default function TodoWrapper() {
    const [todos, setTodos] = useState([])
    const [breadcrum, setBreadcrum] = useState(false)

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])

        console.log(todos)
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
        setBreadcrum(!breadcrum)
        setTimeout(setBreadcrum, 1000)
    }

  return (
    <>
        <div className="todo-wrapper">
            <h1>Lets Finish It</h1>
        <TodoForm addTodo = {addTodo}/>
        {(todos.length === 0) ? <><p className='empty-text'>Todo list is empty</p></> : todos.map((todo, index)=>(
            <Todo task = {todo} key={index} deleteTodo={deleteTodo}/>
        ))}
        </div>
        <div className={breadcrum ? "breadcrum" : "hide"}>
            <p>Deleted Successfully !</p>
        </div>
    </>
    )
}
