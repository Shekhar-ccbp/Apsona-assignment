import React, { useState } from 'react';
import axios from 'axios';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleCreateNote = (e) => {
    e.preventDefault();
    axios.post('/api/notes', { title, content, tags: tags.split(',') })
      .then(response => {
        console.log('Note created:', response.data);
      })
      .catch(error => console.error('Error creating note:', error));
  };

  return (
    <form onSubmit={handleCreateNote}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma separated)"
      />
      <button type="submit">Create Note</button>
    </form>
  );
}

export default CreateNote;
