import React from 'react'
import '../Note/styles.css'
import TrashIcon from '../../icons/trash.svg'
export default function Note({id, text, date, hour, handleDeleteNote}){
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date} - {hour}</small>

                <img className="delete-icon"
                src={TrashIcon}
                onClick={() => handleDeleteNote(id)}
                ></img>
                
            </div>
        </div>
    )
}