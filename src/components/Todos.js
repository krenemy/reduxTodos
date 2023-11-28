import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

function Todos() {
const dispatch = useDispatch();
const todos = useSelector((state)=> state.todos)
console.log(todos)
  return (
    <>
    <h1 className='text-center'>ALLTODOS</h1>
    {todos.map((todo)=>(
        <div className='w-full bg-black text-white p-4 flex justify-between text-center' 
        key={todo.id}> <h1 className='flex justify-center items-center'>{todo.text}</h1>
        <button className='bg-white text-black p-4 rounded-md hover:bg-slate-300'
        onClick={()=>{
          if(todo.id!==1){
          dispatch(removeTodo(todo.id))}}}
        >
        click</button>
        </div> ))}
    </>
  )
}

export default Todos