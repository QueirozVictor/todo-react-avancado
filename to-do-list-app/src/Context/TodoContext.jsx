import { createContext, useState, useEffect, useMemo } from "react";
import { useInput } from '../hooks/useInput';

export const TodoContext = createContext();

export function TodoProvider({ children }){
    //Inicia o filtro de tarefas com todas
    const [filtro, setFiltro] = useState("todas");

    //Hook Personalizado
    const tarefa = useInput();


    //Salva as Tarefas em LocalStorage
    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem("tarefas");
        return tarefasSalvas
        ? JSON.parse(tarefasSalvas)
        : [];
    });

    //Sincroniza o estado das tarefas com o localStorage
    useEffect(() => {
        localStorage.setItem(
            "tarefas",
            JSON.stringify(tarefas)
        );
      }, [tarefas]);

//Criar uma nova tarefa em LocalStorage
    const criarTarefa = (e) => {
        e.preventDefault();

        if (!tarefa.valor.trim()) return;
        //Cria as condições da nova tarefa para passar como argumento para tratamento de dados
        const nova = {
            id: Date.now(),//Cria um ID unico baseado no milisegundo atual
            texto: tarefa.valor,
            concluida: false,
        }
        //Adiciona a nova tarefa mantendo as já existentes
        setTarefas(prev => [...prev, nova]);
        tarefa.limpar();
    };

//Alternar concluida
    const alternarConcluida = (id) => {
        
        setTarefas(prev => prev.map(tarefa => {
            if(tarefa.id === id){
            return{
                ...tarefa,
                concluida: !tarefa.concluida
            } 
            }
            
            return tarefa;
            
        }))
    };

//Remover Tarefa em LocalStorage
    const removerTarefa = (id) => {
        setTarefas( prev => 
        prev.filter(tarefa => tarefa.id !== id))
    };

//Filtrar Tarefas
    const tarefasFiltradas = useMemo(() => {
    if (filtro === "todas") return tarefas;

    if (filtro === "pendentes") return tarefas.filter(tarefa => !tarefa.concluida);

    return tarefas.filter(tarefa => tarefa.concluida);
}, [tarefas, filtro]);

//Icone de de filtros
const totalTarefas = tarefas.length;
const tarefasPendentes = useMemo(() => {
    return tarefas.filter(
        tarefa => !tarefa.concluida
    ).length;
},[tarefas]);
const totalConcluidas = useMemo(() => {
    return tarefas.filter(
        tarefa => tarefa.concluida
    ).length;
}, [tarefas]);

const value = useMemo(() => ({
    filtro,
    tarefa,
    setFiltro,
    criarTarefa,
    alternarConcluida,
    removerTarefa,
    tarefasFiltradas,
    totalTarefas,
    tarefasPendentes,
    totalConcluidas
}), [
    filtro,
    tarefa,
    tarefasFiltradas,
    totalTarefas,
    tarefasPendentes,
    totalConcluidas
]);

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}