import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const NoteList = ({ notes, onNoteSelect, onDeleteNote, onRenameNote }) => {
  return (
    <div className="flex">
      {notes.map(note => (
        <div key={note.id} className="mb-2 p-2 bg-red-200 rounded cursor-pointer" onClick={() => onNoteSelect(note)}>
          <div className="flex justify-between m-3">
            {/* <span>{note.text}</span> */}
            <span>{note.name}</span>
            <div>
              <button onClick={(e) => { e.stopPropagation(); onRenameNote(note.id, prompt('New name:')); }} className="mr-2"><DriveFileRenameOutlineIcon /></button>
              <button onClick={(e) => { e.stopPropagation(); onDeleteNote(note.id); }}><DeleteIcon /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;