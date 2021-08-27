import React, { useState } from 'react'
import '../AddNote/styles.css'

export default function AddNote( {handleAddNote} ){
    const [noteText, setNoteText] = useState('');
    const [countWords, setCountWords] = useState(0);
    const characterLimit = 140;


    function handleChange(event){
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
        

    }

    function handleSaveClick(){
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('')
        }else{
            //ADicionar aviso
            console.log("Digite alguma coisa")
        }
        

    }
    return(
        <div className="addNote new">
            <textarea 
            rows="8" 
            cols="10"
            placeholder="Digite uma nota..."
            className="note-textarea new"
            onChange={handleChange}
            value={noteText}
            >

            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Caracteres Restantes</small>
                <button className="saveButton" onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    )
}