let titles = [
  "Grocery List",
  "Meeting Notes",
  "Travel Ideas",
  "Reminder",
  "Book Summary",
  "Daily Reflection",
  "Things to Remember Before Launching the Website",
];

let notes = [
  "Milk, eggs, bread, spinach, pasta, tomato sauce, apples, and oat milk.",
  "Talked about the new marketing strategy. Deadline for campaign is next Friday. Assign tasks by tomorrow morning.",
  "Visit Lisbon in spring. Look into affordable Airbnbs near the coast. Try pastel de nata!",
  "Don't forget to call the dentist and book an appointment for next week.",
  "Finished reading 'Atomic Habits'. Key takeaway: small consistent changes lead to big results.",
  "Felt more productive today. Avoided social media until lunch. Need to sleep earlier though.",
  "Finalize all responsive layout tests on mobile and tablet. Check accessibility contrast ratios and ensure keyboard navigation works. Compress all images to improve load times. Double-check spelling and grammar on all static pages. Configure meta tags for SEO and social media previews. Create a simple 404 page. Set up Google Analytics and cookie consent banner. Finally, make a backup of the entire project and push to GitHub before deployment.",
];

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

function toggleOverlay(index) {
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("overlay").innerHTML = showNoteOverlay(index);
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("d-none");
}

function deleteNote(index) {
  titles.splice([index], 1);
  notes.splice([index], 1)
  render()
}
