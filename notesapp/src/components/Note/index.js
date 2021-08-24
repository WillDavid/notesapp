import React from 'react'
import '../Note/styles.css'
export default function Note({id, text, date, handleDeleteNote}){
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button
                className="delete-icon"
                onClick={() => handleDeleteNote(id)}
                >Delete</button>
            </div>
        </div>
    )
}