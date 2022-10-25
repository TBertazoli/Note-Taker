const router = require('express').Router();
const {createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

// router.get("/animals", (req, res) => {
//   let results = animals;
//   if (req.query) {
//     results= filterByQuery(req.query, results);
//   }
//   res.json(results);
// });

// router.get('/animals/:id', (req, res) => {
//   const result = findById(req.params.id, animals);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
    
// });

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