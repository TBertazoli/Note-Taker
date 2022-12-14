const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {  
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }  
  return true;
}

function deleteById(id, notesArray) {
    const result = notesArray.findIndex(note => note.id === id);
    if (result === -1) {
        return;
    }
    notesArray.splice(result, 1);
    fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
    );
}

module.exports = {
    createNewNote,
    validateNote,
    deleteById
}