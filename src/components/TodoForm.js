import React, {useState} from 'react'

export default function TodoForm({addTodo}) {
    const [newTask, setNewTask] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addTodo(newTask)

        setNewTask("")
    }

  return (
    <>
      <div className="todo-form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder='Add your task here...' required/>
        <button type="submit" className='add-btn'>Add</button>
    </form>
      </div>
    </>
  )
}
