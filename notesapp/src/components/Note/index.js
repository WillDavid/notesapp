import React from 'react'
import '../Note/styles.css'
import TrashIcon from '../../icons/trash.svg'
export default function Note({id, text, date, hour, handleDeleteNote, color}){

    


    const cardStyle = {
        backgroundColor: color,
    }

    return(
        <div className="note" style={cardStyle}>
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