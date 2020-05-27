import React from 'react'

const TodosContext = React.createContext({
todos:[
{id:1, text:"Eat BreakFast", complete: true},
{id:2, text:"Eat Lunch", complete: false},
{id:3, text:"Eat Dinner", complete: false},
{id:4, text:"Have a Tea", complete: false},
{id:5, text:"Have a Drink", complete: false},
{id:6, text:"Have a Juice", complete: false}
],
currentTodo: {}
}
)

export default TodosContext;