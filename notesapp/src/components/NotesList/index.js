import React from 'react';
import AddNote from '../AddNote';
import Note from '../Note';
import '../NotesList/styles.css';

export default function NotesList( {notes, handleAddNote, handleDeleteNote}){
    return(
        <div className="notes-list">
            
            {notes.map( (note)=> (
                    <Note id={note.id} text={note.text} date={note.date} hour={note.hour}
                    handleDeleteNote={handleDeleteNote}/>)
                
                
            ).reverse()}
            <AddNote handleAddNote={handleAddNote}/>

            
        </div>
    )
}