import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const value = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({
                error, 
                loading, 
                searchedTodos, 
                completeTodos, 
                deleteTodo}) => (
                    <TodoList>
                        {error && <p>Hubo un error</p>}
                        {loading && <p>Cargando</p>}
                        {(!loading && !searchedTodos.length) &&
                            <p>Crea tu primer toDo</p>}
                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => { completeTodos(todo.text) }}
                                onDelete={() => { deleteTodo(todo.text) }}
                            />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };