function getNotesTemplate(index) {
  return /*html*/ `
    <div class="note-card" onclick="toggleOverlay(${index})">
      <div class="note-content">
        <h3>${titles[index]}</h3>
        <hr class="note-divider" />
        <p>${notes[index]}</p>
      </div>
      <div class="note-footer">
        <hr class="note-divider" />
        <div class="note-actions">
          <!-- <button onclick="editNote(${index})"><img src="../assets/icons/edit.svg" alt="Edit"></button> -->
          <button onclick="deleteNote(${index}), event.stopPropagation()"><img src="../assets/icons/delete.svg" alt="Delete"></button>
          <button onclick="labelNote(${index})"><img src="../assets/icons/label.svg" alt="Label"></button>
        </div>
      </div>
    </div>
  `;
}

function showNoteOverlay(index) {
  return /*html*/ `
    <div class="note-overlay-card" onclick="event.stopPropagation()">
      <h1>${titles[index]}</h1>
      <hr class="note-divider" />
      <p>${notes[index]}</p>
      <hr class="note-divider" />
      <div class="note-actions">
        <!-- <button onclick="editNote(${index})">
          <img src="../assets/icons/edit.svg" alt="Edit">
        </button> -->
        <button onclick="deleteNote(${index}), closeOverlay()">
          <img src="../assets/icons/delete.svg" alt="Delete">
        </button>
        <button onclick="labelNote(${index})">
          <img src="../assets/icons/label.svg" alt="Label">
        </button>
      </div>
    </div>
  `;
}

