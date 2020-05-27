import React, {useReducer, useContext} from 'react';
import TodosContext from './context'
import TodosReducer from './reducer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const initialstate  = useContext(TodosContext);
  const  [state, dispatch] = useReducer(TodosReducer, initialstate);

  return (
    
    <TodosContext.Provider value={{state, dispatch}}>
    <TodoForm />
    <TodoList />
    </TodosContext.Provider>
  )
}

export default App;
