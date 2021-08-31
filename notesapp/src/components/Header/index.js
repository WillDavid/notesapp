import React from 'react';
import '../Header/styles.css';


export default function Header( {handleToggleDarkMode }){
    return(
        <div className="headerStyle">
            <h2>MeAnota</h2>
            <button 
            onClick={ () => handleToggleDarkMode( (previousDarkMode) => !previousDarkMode)}
            className="buttonDarkMode">
                <img src="https://img.icons8.com/ios/26/000000/lamp.png"/>
                <spam>Modo Escuro</spam>
            </button>
            
        </div>
    )
}