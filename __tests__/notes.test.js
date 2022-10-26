const fs = require("fs");

const {  
  deleteById,
  createNewNote,
  validateNote,
} = require("../lib/notes.js");

const { notes } = require("../db/db");
const { default: JestHasteMap } = require("jest-haste-map");

jest.mock('fs'); //this will prevent the tests to create a new animal into animals.json

test("creates an new note", () => {
  const note = createNewNote(
    { title: "Study Express.js", text: "Study for 3 hours" },
    notes
  );

  expect(note.title).toBe("Study Express.js");
  expect(note.text).toBe("Study for 3 hours");
});

test("delete by id", () => {
  const notes = [
    {
      id: "2",
      title: "Study Express.js",
      text: "Study for 3 hours"    
    },
  ];

  deleteById("2", notes);

  expect(notes.length).toBe(0);
});

test("validates notes", () => {
  const note = {
    id: "3",
    title: "Study Express.js",
    text: "Study for 3 hours"  
  };

  const invalidNote = {
    id: "3",
     title: "Study Express.js"  
  };

  const result = validateNote(note);
  const result2 = validateNote(invalidNote);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});