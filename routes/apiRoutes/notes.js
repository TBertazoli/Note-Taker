const router = require('express').Router();
const {createNewNote, validateNote, deleteById } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get("/notes", (req, res) => {
  let results = notes;
   res.json(results);
});

router.delete('/notes/:id', (req, res) => {
  deleteById(req.params.id, notes);
    res.status(200).send();
});

router.post('/notes', (req, res) => {
    console.log(notes)
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

// if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }

});

module.exports  = router;