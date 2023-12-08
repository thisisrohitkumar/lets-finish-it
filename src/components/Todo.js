import React from 'react'

export default function Todo({task, deleteTodo}) {
  return (
    <>
        <div className='todo-task-container'>
            <p>{task.task}</p>
            <button className='del-btn' title='Delete' onClick={() => deleteTodo(task.id)}><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </>
  )
}
