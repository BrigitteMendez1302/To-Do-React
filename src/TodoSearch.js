import React from 'react'
import './TodoSearch.css';

// class Componente extends React.Component{
//     constructor(){
//         this.state= {
//             patito: 'Juan'
//         };
//     }

//     render(){
//         return(
//             <div>{this.state.patito}</div>
//         )
//     }
// }

function TodoSearch(){
    const [state, setState] = React.useState('Clau');



    //state devuelve un array de n=2
    /*
    [
        'Juan',
        setState('Enrique')
    ]
    */

    const onSearchValueChanged = (event) => 
    {console.log(event.target.value)
    setState(event.target.value)
    }
    return [
        <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value = {state}
        onChange={onSearchValueChanged}
        />,
        <p>{state}</p>
    ];
}

export {TodoSearch}