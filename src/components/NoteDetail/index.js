import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    axios.get(`/api/notes/${id}`)
      .then(response => setNote(response.data))
      .catch(error => console.error('Error fetching note:', error));
  }, [id]);

  if (!note) return <div>Loading...</div>;

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p>Tags: {note.tags.join(', ')}</p>
    </div>
  );
}

export default NoteDetail;
