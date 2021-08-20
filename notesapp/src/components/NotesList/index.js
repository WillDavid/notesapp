import React from 'react';
import Note from '../Note';
import '../NotesList/styles.css';

export default function NotesList( {notes}){
    return(
        <div className="notes-list">
            {notes.map( (note)=> (
                    <Note id={note.id} text={note.text} date={note.date}/>)
                
                
            )}
        </div>
    )
}