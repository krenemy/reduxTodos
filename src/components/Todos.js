import React from 'react'
import { UseSelector, useSelector } from 'react-redux'


function Todos() {
const todos = useSelector((state)=> state.todos)
console.log(todos)
  return (
    <>
    <h1 className='text-center'>ALLTODOS</h1>
    {todos.map((todo)=>(
        <div className='w-full bg-black text-white p-4' 
        key={todo.id}> <h1 className='text-center'>{todo.text}</h1></div> ))}
    </>
  )
}

export default Todos