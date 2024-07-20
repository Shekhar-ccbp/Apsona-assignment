const express = require('express');
const Note = require('../models/Note');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.userId });
    res.json(notes);
  } catch (error) {
    res.status(500).send('Error fetching notes');
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = new Note({ title, content, tags, userId: req.user.userId });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).send('Error creating note');
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note || note.userId.toString() !== req.user.userId) {
      return res.status(404).send('Note not found');
    }
    res.json(note);
  } catch (error) {
    res.status(500).send('Error fetching note');
  }
});

module.exports = router;
