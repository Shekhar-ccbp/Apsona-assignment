const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const noteRoutes = require('./routes/note');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/note-maker', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
