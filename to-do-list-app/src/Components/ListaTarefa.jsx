import { useContext } from 'react'
import Tarefa from './Tarefa';
import Filtro from './Filtros';
import { TodoContext } from '../Context/TodoContext';



function ListaTarefa() {
    const {
        tarefa,
        criarTarefa,
        alternarConcluida,
        removerTarefa,
        tarefasFiltradas
    } = useContext(TodoContext);

  return (
    <>
        <form onSubmit={criarTarefa} className='flex justify-between' >
            <input 
            type="text"
            placeholder='Oque você precisa fazer?' 
            value={tarefa.valor}
            onChange={tarefa.onChange}
            className='text-sm shadow-sm shadow-cyan-950 rounded p-2 m-2 w-55 md:w-4/6 lg:w-5/6'/>
            <button type='submit' className='m-2 rounded bg-linear-to-r from-cyan-500 to-blue-500 p-2  text-white font-medium w-40'>+ Adicionar</button>
        </form>

        <Filtro/>

        <ul className=''>{tarefasFiltradas.map(tarefa => <Tarefa 
            key={tarefa.id} 
            id = {tarefa.id}
            texto = {tarefa.texto}
            concluida = {tarefa.concluida}
            onRemove={removerTarefa}
            onUpdate={alternarConcluida}/>)}
        </ul>
    </>
  )
}


export default ListaTarefa;
