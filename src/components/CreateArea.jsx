import React from 'react';

const CreateArea = ({ notes, onNoteSelect, onDeleteNote, onRenameNote }) => {
  return (
    <div>
      {notes.map(note => (
        <div key={note.id} className="mb-2 p-2 bg-red-200 rounded cursor-pointer" onClick={() => onNoteSelect(note)}>
          <div className="flex justify-between">
            <span>{note.text}</span>
            <div>
              <button onClick={(e) => { e.stopPropagation(); onRenameNote(note.id, prompt('New name:')); }} className="mr-2">Rename</button>
              <button onClick={(e) => { e.stopPropagation(); onDeleteNote(note.id); }}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreateArea;