import React from 'react';
import { Link } from 'react-router-dom';

function NoteList({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <Link to="/create-note">Create New Note</Link>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
