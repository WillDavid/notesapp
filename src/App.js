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
		const darkModeStatus = JSON.parse(localStorage.getItem('darkMode'));

		if(savedNotes){
			setNotes(savedNotes);
		}

		if(darkModeStatus){
			setDarkMode(darkModeStatus)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
		localStorage.setItem('darkMode', JSON.stringify(darkMode))
	}, [notes, darkMode])


	function addNotes (text) {
		const date = new Date();
		const newNote = {
			id:nanoid(),
			text: text,
			date: date.toLocaleDateString(),
			hour: date.toLocaleTimeString('pt-BR'),
			color: corAleatoria(),
	
		}

		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	}

	function deleteNote(id){
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes);
	}

	function corAleatoria() {
		const color = Math.floor(Math.random() * (4 - 0) + 0)

		if(color == 1){
			return '#f6c2d9'
		}else if(color == 2){
			return '#fff69b'
		}else if(color == 3){
			return '#a1c8e9'
		}
		else if(color == 4){
			return '#e4dae2'
		}
		else{
			return '#bcdfc9'
		}

	  }

	 


	


	return(

		<div className={`${darkMode && 'dark-mode'}`}>
			<div className="container">
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />

				<NotesList notes={notes.filter( (note) => note.text.toUpperCase().includes(searchText))} handleAddNote={addNotes} handleDeleteNote={deleteNote}/>
				



					
				
			</div>
			
		</div>

	)
}
