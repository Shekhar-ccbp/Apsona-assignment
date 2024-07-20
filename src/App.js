import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    axios.get('/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/notes/:id" element={<NoteDetail />}  />
          <Route path="/" element={() => <NoteList notes={notes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
