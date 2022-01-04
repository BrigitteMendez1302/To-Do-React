//import './App.css';
import React from 'react'
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoItem} from './TodoItem'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'


const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso cebolla', completed: false },
  { text: 'Comer cebolla', completed: false },
]


function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
