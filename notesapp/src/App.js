import React, { useState } from "react";
import Header from "./components/Header";
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid'

export default function App() {
	const [notes, setNotes] = useState([]);

	function addNotes (text) {
		const date = new Date();
		const newNote = {
			id:nanoid(),
			text: text,
			date: date.toLocaleDateString()
		}

		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	}

	function deleteNote(id){
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes);
	}



	return(
		<div className="container">

			<NotesList notes={notes} handleAddNote={addNotes} handleDeleteNote={deleteNote}/>

				
			
		</div>

	)
}
