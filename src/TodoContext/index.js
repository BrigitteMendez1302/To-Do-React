import React from 'react'
const TodoContext = React.createContext()

function TodoProvider(props) {
    return(
        <TodoContext.Provider value={{
            
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

//provider envuelve todo context
//consumer para que obtengan los datos