import React, { useState } from 'react';
import CreateArea from './CreateArea';

const NoteEditor = ({ selectedNote, onAddNote }) => {
  const [text, setText] = useState('');

  const handleAudioToText = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };
    recognition.start();
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const handleSaveNote = () => {
    if (text.trim()) {
      onAddNote({
        id: Date.now(),
        name: `Note ${Date.now()}`,
        content: text,
      });
      setText(note);
    }
  };

  return (
    
    <div className="bg-white p-4 rounded shadow">
      {/* <div className='bg-white h-100'>
        <p>saved</p>
      
      </div> */}
      <div className="w-full h-20 border rounded flex  space-x-4" >
      {/* <button className="bg-red-500 h-10 m-4 text-white rounded"onClick={handleAudioToText}>Audio</button> */}
      <button onClick={handleCopyToClipboard} className="bg-red-500 h-10 m-4 text-white px-4 py-2 rounded mr-10">Copy </button>
      <textarea
        className="w-200 h-15 p-2  rounded mb-2 mr-20"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or use the audio-to-text feature..."
        
      />
      <div className="w-full h-10 m-4 rounded flex flex-end" >
      <button className="bg-red-400 mr-4 text-white rounded "onClick={handleAudioToText}>Start recording</button>
      <button onClick={handleSaveNote} className="bg-red-500 text-white px-4 py-2 rounded">Save Note</button></div>
      </div>
      {/* <textarea
        className="w-full h-20 p-2 border rounded mb-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or use the audio-to-text feature..."
        
      /> */}
      {/* <div className="flex space-x-4">
        <button onClick={handleAudioToText} className="bg-red-500 text-white px-4 py-2 rounded">Audio to Text</button>
        <button onClick={handleCopyToClipboard} className="bg-red-500 text-white px-4 py-2 rounded">Copy to Clipboard</button>
        <button onClick={handleSaveNote} className="bg-red-500 text-white px-4 py-2 rounded">Save Note</button>
      </div> */}
    </div>
  );
};

export default NoteEditor;