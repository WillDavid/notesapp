import React from 'react';
import '../Header/styles.css';


export default function Header( {handleToggleDarkMode }){
    return(
        <div className="headerStyle">
            <h2>NOTAS</h2>
            <button 
            onClick={ () => handleToggleDarkMode( (previousDarkMode) => !previousDarkMode)}
            className="buttonDarkMode">
                Dark Mode
            </button>
        </div>
    )
}