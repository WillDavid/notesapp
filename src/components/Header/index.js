import React from 'react';
import '../Header/styles.css';
import Lampada from '../../icons/lampada.svg'

export default function Header( {handleToggleDarkMode }){
    return(
        <div className="headerStyle">
            <h2>Me Anota</h2>
            
            <button 
            onClick={ () => handleToggleDarkMode( (previousDarkMode) => !previousDarkMode)}
            className="buttonDarkMode">
                <img src={Lampada}></img>
                <spam>Modo Escuro</spam>
            </button>
            
        </div>
    )
}