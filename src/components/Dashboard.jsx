import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import Search from './Search';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const renameNote = (id, newName) => {
    setNotes(notes.map(note => note.id === id ? { ...note, name: newName } : note));
  };

  return (
    <div className="flex h-screen">
      
      {/* <div className="w-1/4 bg-white p-4">
        <NoteList notes={notes} onNoteSelect={setSelectedNote} onDeleteNote={deleteNote} onRenameNote={renameNote} />
      </div>
       */}
      <div className="w-3/4 p-4">
      <div className="w-70% h-10% bg-red-300 rounded-50">
        <Search></Search></div>
      <div className='flex h-100'>
        <div className="w-1/4 p-4">
        <NoteList notes={notes} onNoteSelect={setSelectedNote} onDeleteNote={deleteNote} onRenameNote={renameNote} />
      </div></div>
        <NoteEditor selectedNote={selectedNote} onAddNote={addNote} />
      </div>
    </div>
  );
};

export default Dashboard;