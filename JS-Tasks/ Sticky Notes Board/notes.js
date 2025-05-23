let noteInput = document.getElementById("noteInput");
let colorPicker = document.getElementById("colorPicker");
let addButton = document.getElementById("addButton");
let error = document.getElementById("error");
let board = document.getElementById("board");

let notes = loadNotes();
let isDragging = false;
let currentNote = null;
let startX, startY;

function createNote(text, color) {
  text = text.trim();

  if (!text) {
    showErrorMessage("Note cannot be empty!");
    return;
  }

  // create note :
  let note = {
    id: Date.now(),
    text,
    x: 50, // default position //
    y: 50,
    color,
  };

  notes.push(note);
  saveNotes();
  renderNotes();
  noteInput.value = "";
  error.classList.add("hidden");
}
function updateNote(id, text) {
  notes = notes.map((note) => (note.id === id ? { ...note, text } : note));
  saveNotes();
}

function deleteNote(id) {
  notes = notes.filter((note) => {
    return note.id !== id;
  });

  saveNotes();
  renderNotes();
}

function startDrag(e, id) {
  e.preventDefault();
  isDragging = true;

  currentNote = notes.find((note) => note.id === id);
  startX = e.clientX - currentNote.x;
  startY = e.clientY - currentNote.y;

  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDrag);
}

function drag(e) {
  if (!isDragging) return;

  let boardRect = board.getBoundingClientRect();
  console.log("boardRect", boardRect);
  let noteWidth = 200; // match css .note width
  let noteHeight = 200; // match css .note height

  // Calculate new position :
  let newX = e.clientX - startX;
  let newY = e.clientY - startY;

  // constrain the board bounds :
  newX = Math.max(0, Math.min(newX, boardRect.width - noteWidth));
  newY = Math.max(0, Math.min(newY, boardRect.height - noteHeight));

  // update the note position :
  currentNote.x = newX;
  currentNote.y = newY;

  // Update DOM :
  const noteElement = document.querySelector(
    `.note[data-id="${currentNote.id}"]`
  );

  noteElement.style.left = `${newX}px`;
  noteElement.style.top = `${newY}px`;
}

function stopDrag() {
  if (isDragging) {
    isDragging = false;

    saveNotes();

    // if mouse moves starts again then call `drag` function again :
    // if stops then call `stopDrag` function again :
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
  }
}

function renderNotes() {
  board.innerHTML = "";

  notes.forEach((note) => {
    console.log("note", note);
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.dataset.id = note.id;
    noteElement.style.left = `${note.x}px`;
    noteElement.style.top = `${note.y}px`;
    noteElement.style.backgroundColor = note.color;

    noteElement.innerHTML = `
     <textarea>${note.text}</textarea>
     <button class="delete">X</button>
    `;

    const textarea = noteElement.querySelector("textarea");
    const deleteButton = noteElement.querySelector(".delete");

    textarea.addEventListener("input", () => {
      updateNote(note.id, textarea.value);
    });

    deleteButton.addEventListener("click", () => deleteNote(note.id));
    noteElement.addEventListener("mousedown", (e) => startDrag(e, note.id));
    board.appendChild(noteElement);
  });
}

function showErrorMessage(err) {
  error.textContent = err;

  error.classList.remove("hidden");
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const saved = localStorage.getItem("notes");

  return saved ? JSON.parse(saved) : [];
}

// Prevent default drag behavior :
board.addEventListener("dragstart", (e) => e.preventDefault());

addButton.addEventListener("click", () => {
  createNote(noteInput.value, colorPicker.value);
});

noteInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    createNote(noteInput.value, colorPicker.value);
  }
});

renderNotes();
