import React from 'react'
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext()

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // }
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // }
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    };

    // console.log('Render antes del use effect')
    // React.useEffect(()=>{
    //   console.log('use effect')
    // }, [totalTodos])
    // console.log('Render despues del use effect')

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider >
    )
}

//provider envuelve toda la aplicacion (componentes)
//consumer para que obtengan los datos

export {TodoContext, TodoProvider}