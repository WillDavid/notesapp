import React, { useState } from "react";
import Header from "./components/Header";
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid'

export default function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "Quinta Nota",
			date: "15/04/2021"
		},
		{
			id: nanoid(),
			text: "Quarta Nota",
			date: "15/04/2021"
		},
		{
			id: nanoid(),
			text: "Terceira Nota",
			date: "15/04/2021"
		},
	
	]);



	return(
		<div className="container">
			<Header>
				
			</Header>

			<NotesList notes={notes} />

				
			
		</div>

	)
}
