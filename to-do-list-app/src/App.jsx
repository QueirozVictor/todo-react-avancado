import { useContext, useEffect, useState } from 'react'
import './styles/App.css'
import ListaTarefas from './Components/ListaTarefa';
import Check from './assets/image/check.png';
import { TodoContext } from './Context/TodoContext';


function App() {

  return (
     <div className='bg-cyan-50 p-1 h-screen font-base'>
       <div className='flex flex-col rounded shadow-md shadow-cyan-950 m-5 p-3'>

         <div className='flex flex-col items-center '>
           <h1 className='flex items-center m-2 text-2xl'><img src={Check} alt="check" className='mr-2' />To-Do List</h1>
           <p className=' mb-3 text-sm'>Organize suas tarefas e seja mais produtivo</p>
         </div>

          <ListaTarefas/>
       </div>
     </div>
    
  )
}

export default App;
