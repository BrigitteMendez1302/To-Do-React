import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
    const {
                error, 
                loading, 
                searchedTodos, 
                completeTodos, 
                openModal,
                setOpenModal,
                deleteTodo} = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
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
                    {openModal && (
                        <Modal>
                            <TodoForm/>
                        </Modal>
                    )}
            <CreateTodoButton 
            setOpenModal ={setOpenModal}/>
        </React.Fragment>
    );
}

export { AppUI };