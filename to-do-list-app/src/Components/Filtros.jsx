import { useContext } from "react";
import { TodoContext } from '../Context/TodoContext';
import List from '../assets/image/list-m.png';
import Concluded from '../assets/image/concluded-m.png';
import Circle from '../assets/image/circle.png';


export default function Filtros(){
    const {
        filtro,
        setFiltro,
        totalTarefas,
        tarefasPendentes,
        totalConcluidas
    } = useContext(TodoContext);
    return(
        <div className=" flex justify-between p-2 m-2 bg-cyan-100 rounded overflow-hidden shadow-sm shadow-cyan-950">
            <button 
            className={` flex gap-2 text-sm items-center pb-1  ${filtro === "todas" ? "ativo" : ""}`}
            onClick={() => setFiltro("todas")}>Todas <span className="bg-cyan-700 rounded-4xl p-1 w-7 h-7 text-white text-sm flex justify-center">{totalTarefas}</span></button>
            <button 
            className={` flex gap-2 text-sm items-center pb-1   ${filtro === "pendentes" ? "ativo" : ""}`}
            onClick={() => setFiltro("pendentes")}>Pendentes <span className="bg-cyan-700 rounded-4xl p-1 w-7 h-7 text-white text-sm flex justify-center">{tarefasPendentes}</span> </button>
            <button
            className={` flex gap-2 text-sm items-center pb-1  ${filtro === "concluidas" ? "ativo" : ""}`}
            onClick={() => setFiltro("concluidas")}>Concluídas <span className="bg-cyan-700 rounded-4xl p-1 w-7 h-7 text-white text-sm flex justify-center">{totalConcluidas}</span> </button>
        </div>
    )
}
    