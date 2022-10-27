const router = require('express').Router();
const {createNewNote, validateNote, deleteById } = require('../../lib/notes');
const { notes } = require('../../db/db');
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
  let results = notes;
   res.json(results);
});

router.delete('/notes/:id', (req, res) => {
  deleteById(req.params.id, notes);
    res.status(200).send();
});

router.post('/notes', (req, res) => {    
  // set id based on what the next index of the array will be
  req.body.id = uuidv4();

// if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }

});

module.exports  = router;