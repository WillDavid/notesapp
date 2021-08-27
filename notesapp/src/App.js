import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid'
import Search from "./components/Search";

export default function App() {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

		if(savedNotes){
			setNotes(savedNotes);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
	}, [notes])


	function addNotes (text) {
		const date = new Date();
		const newNote = {
			id:nanoid(),
			text: text,
			date: date.toLocaleDateString(),
			hour: date.toLocaleTimeString('pt-BR')
		}

		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	}

	function deleteNote(id){
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes);
	}



	return(

		<div className={`${darkMode && 'dark-mode'}`}>
			<div className="container">
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />

				<NotesList notes={notes.filter( (note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNotes} handleDeleteNote={deleteNote}/>

					
				
			</div>
		</div>

	)
}
