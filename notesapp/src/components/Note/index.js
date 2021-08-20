import React from 'react'
import '../Note/styles.css'
export default function Note({id, text, date}){
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button>Delete</button>
            </div>
        </div>
    )
}