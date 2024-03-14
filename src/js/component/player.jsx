import React, {useState} from "react";

const Player= ()=>{
    const [playBackground, setPlayBackground] = useState('gray');
    const [backBackground, setBackBackground] = useState('gray')
    function back(){
        console.log('back')
        if( backBackground == 'green'){
            setBackBackground('gray')
        }else{
            setBackBackground('green')
            setPlayBackground('gray')
        }       
    }

    function play(){
        console.log('back')
        if( playBackground == 'green'){
            setPlayBackground('gray')
        }else{
            setPlayBackground('green')
            setBackBackground('gray')
        }       
    }
        
    return(
        <>
            <button style={{backgroundColor: backBackground}} onClick={back}>Anterior</button>
            <button style={{backgroundColor: playBackground}} onClick={play}>Play</button>
            <button>Stop</button>
            <button>Siguiente</button>
        </>
    )
}

export default Player