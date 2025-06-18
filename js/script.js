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

let labelTitle = [
  "Workout Routine",
  "Books to Read",
  "Travel Checklist",
  "Frontend Fixes",
  "Ideas for Blog",
  "Mental Health Notes",
  "Gift List",
  "Meeting Summary",
];

let labelNote = [
  "Monday: Push, Wednesday: Pull, Friday: Legs. Include warm-up & stretching.",
  "– 'Atomic Habits'\n– 'Deep Work'\n– 'The Pragmatic Programmer'",
  "✓ Passport\n✓ Tickets\n✓ Powerbank\n✓ Travel insurance\n✓ Charger adapter",
  "Fix mobile nav overlap, update hover transitions, test dark mode toggle.",
  "Write about digital minimalism, habits vs. goals, and productivity myths.",
  "Try journaling at night, limit screen time, and take 10-minute walks.",
  "Dad – headphones\nSister – handmade soap\nColleague – coffee gift card",
  "Client liked draft 2. Next steps: final mockup and handoff by Friday.",
];

function initPage() {
  render();
  loadSidebar();
}

function render() {
  let contentRef = document.getElementById("notescontent");
  contentRef.innerHTML = "";
  for (let index = 0; index < notes.length; index++) {
    contentRef.innerHTML += getNotesTemplate(index);
  }
}

function loadSidebar() {
  let labelcontentRef = document.getElementById("sidebar-content");
  labelcontentRef.innerHTML = "";
  for (let index = 0; index < labelNote.length; index++) {
    labelcontentRef.innerHTML += getLabelTemplate(index);
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
  document.body.classList.add("body-no-scroll");
}

function toggleLabelOverlay(index) {
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("overlay").innerHTML = showLabelNoteOverlay(index);
  document.body.classList.add("body-no-scroll");
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("d-none");
  document.body.classList.remove("body-no-scroll");
}

function deleteNote(index) {
  titles.splice([index], 1);
  notes.splice([index], 1);
  initPage();
}

function pushLabelNote(index) {
  labelTitle.push(titles[index]);
  labelNote.push(notes[index]);
  deleteNote(index);
  initPage();
}

function enlabelNote(index) {
  titles.push(labelTitle[index]);
  notes.push(labelNote[index]);
  labelTitle.splice([index], 1);
  labelNote.splice([index], 1);
  initPage();
}

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("d-none");
  setTimeout(() => sidebar.classList.add("active"), 10);
  document.getElementById("sidebarOverlay").classList.remove("d-none");
  document.body.classList.add("body-no-scroll");
  document.querySelector(".open-sidebar-btn").classList.add("hide");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  setTimeout(() => {
    sidebar.classList.add("d-none");
  }, 300);
  document.getElementById("sidebarOverlay").classList.add("d-none");
  document.body.classList.remove("body-no-scroll");
  document.querySelector(".open-sidebar-btn").classList.remove("hide");
}
