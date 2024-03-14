import React, {useState} from 'react'

const Counter = ()=>{

    //useState() //retorna una array [nombre de la varible con memmoria, funcion que modifica esa variable]
    // [variable, funcion que me modifica. lavariable] = useState( el valor inicial )
    const [count , setCount] = useState(0)
    const [track, setTrack] = useState(0)

    function agregar(){
        console.log('agregar')
        //setCount ===> count =
        // setCount(count + 1)
        // count++ ===> count = count + 1        
        setCount(count+ 1)
        setTrack(track + 1)
    }

    function quitar(){
        console.log('quitar')
        //setCount === count  =
        setCount(count - 1)
        setTrack(track + 1)        
    }
    return (
        <div>
            <h1>counter</h1> 
            <button onClick={quitar}>Quitar</button>
            <p>{count}</p>
            <button onClick={agregar}>Agregar</button>
            <p>modificaste el contadot {track} veces </p>
        </div>
    )
}

export default Counter