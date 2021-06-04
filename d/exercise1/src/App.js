import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  // const addNote = (event) => {
  //   event.preventDefault()
  //   const noteObject = {
  //     content: newNote,
  //     date: new Date().toISOString(),
  //     important: Math.random() < 0.5,
  //     id: notes.length + 1,
  //   }

  //   setNotes(notes.concat(noteObject));
  //   setNewNote("")
  // }

  const hook = () => {
    console.log('effect')
  
    // const eventHandler = (response) => {
    //   console.log('promise fulfilled')
    //   setNotes(response.data)
    // }
    noteService.getAll().then(initialNotes => {setNotes(initialNotes)})
  }

  useEffect(hook, []);
  console.log("render", notes.length, "notes");

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}

    noteService.update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id? note : returnedNote))
    })
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
        console.log(response)
      })
  }


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notes.map((note, index) =>
          <Note key={index} note={note} 
          toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}


export default App;
