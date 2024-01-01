import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  function addTodo(e) {
    e.preventDefault()
    console.log(text);
    setTodo([...todo, text]);
    console.log(todo);
    setText('')
  }

  function editTodo(index) {
    // console.log('edit called');
    const newTodo = [...todo ]
    const editPrompt = prompt('Enter New Todo?')
    newTodo[index] = editPrompt
    setTodo(newTodo)
  }

  function deleteTodo(index) {
    const deleteTodo = [...todo]
    deleteTodo.splice(index, 1);
    setTodo(deleteTodo)
  }



  return (
    <>
      <nav className='w-full h-14 bg-blue-700 text-orange-600'>
        <div className='head flex justify-between'>
          <div>
          <h1 className='text-white pt-2 text-3xl ml-[50px]'>Todo App</h1>
          </div>
          <div className='flex mr-9'>
            <div><h4 className='cursor-pointer pt-4 text-xl text-white mx-9 '>Home</h4></div>
            <div><h4 className='cursor-pointer pt-4 text-xl text-white mx-9 '>About</h4></div>
            <div><h4 className='cursor-pointer pt-4 text-xl text-white mx-9 '>Contact</h4></div>
          </div>
        </div>
      </nav>

      <div className="todo-div text-center mt-20">
        <form onSubmit={addTodo}>
        <input className='h-12 w-96 border-2 border-black p-2 text-black rounded bg-white' type="text" placeholder='Enter Todo' onChange={(e) => setText(e.target.value)} value={text}/>
        <button className='button ml-7 bg-blue-700 rounded-xl py-2 px-3 text-white' type='submit'>Add Todo</button>
        </form><br /><br />
        <ul className='border-2 border-black p-5 mx-80'>
          {todo.map((item, index) => {
            return <li key={index}>{item}
            <button className='delete mt-2 mx-2 bg-blue-700 py-1 px-4 rounded-xl' onClick={() => editTodo(index)}>Edit</button>
            <button className='edit mt-2 mx-2 bg-red-700 py-1 px-2 rounded-xl' onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
      
    </>
  )
}

export default App








