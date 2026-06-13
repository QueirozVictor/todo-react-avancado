import { memo } from "react";
import '../styles/Concluida.css';
import Bin from '../assets/image/bin-w.png';


function Tarefa({id,texto, concluida, onRemove, onUpdate}){

return(
        <li 
        className="flex justify-between p-2 bg-cyan-100 mt-2">
        <div 
        className="p-2 flex gap-3">
        <input type="checkbox" checked = {concluida} onChange={() => onUpdate(id)}/>
        <span 
        className={concluida ? 'concluida' : ''}>{texto}
        </span>
        </div>
        <button 
        onClick={()=> onRemove(id)} 
        className="flex gap-2 rounded p-2 bg-linear-to-r from-red-200 to-red-500 text-white font-medium">
        <img src={Bin}/>
        </button>
        </li>
    )
    
}

export default memo(Tarefa);