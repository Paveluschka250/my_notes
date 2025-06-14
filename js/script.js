let titles = ["first note", "second note"];
let notes = ["this is my first note", "this is my second note"];

function render() {
  let contentRef = document.getElementById("notescontent");
  contentRef.innerHTML = "";
  for (let index = 0; index < notes.length; index++) {
    contentRef.innerHTML += getNotesTemplate(index);
  }
}

function saveNotes() {
  let titleInput = document.getElementById("title");
  let noteInput = document.getElementById("note");
  let title = titleInput.value;
  let note = noteInput.value;
  titles.push(title);
  notes.push(note);
  render();
  titleInput.value = "";
  noteInput.value = "";
}

