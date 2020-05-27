import React, {useContext} from 'react';
import TodosContext from '../context'

function TodoList() {
    const {state, dispatch} = useContext(TodosContext)

    const title = state.todos.length >0 ? `${state.todos.length} Todos`: "Nothing to do!"
    return (
        <div className="container mx-auto max-w-md text-center font-mono m-10 ">
        <h1 className="text-bold">{title}</h1>
            <ul className="list-reset text-black p-0">
            {state.todos.map(todo =>(
                <li key={todo.id} className="flex item-center bg-green-200 border-black border-solid border-2 my-2 py-4 hover:bg-purple-500 hover:text-white">
                <span 
                onDoubleClick={()=> dispatch({type:"TOGGLE_TODO", payload:todo})}
                className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}>{todo.text}</span>
                <button onClick={()=>dispatch({type:'SET_CURRENT_TODO', payload:todo})}>
                <img src="https://icon.now.sh/edit/0050c5"
                alt="Edit icon"
                className="h-6"/>
                </button>
                <button onClick={()=>dispatch({type:'DELETE_TODO', payload:todo})}>
                 <img src="https://icon.now.sh/delete/8b000"
                alt="Delete icon"
                className="h-6"/>
                </button>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default TodoList;