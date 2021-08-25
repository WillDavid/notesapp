import React from 'react'
import '../Search/styles.css'
import SearchIcon from '../../icons/searchIcon.svg'

export default function Search( {handleSearchNote }){
    return(
        <div className="search">
            <img src={SearchIcon} className="searchIcon"></img>
            <input
            type="text"
            placeholder="Digite para procurar..."
            onChange={ (event) => handleSearchNote(event.target.value) }
            >
            </input>

        </div>
    )
}