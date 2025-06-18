function getNotesTemplate(index) {
  return /*html*/ `
    <div class="note-card" onclick="toggleOverlay(${index})">
      <h3>${titles[index]}</h3>
      <hr/>
      <p>${notes[index]}</p>   
      <hr/>
      <div class="note-actions">
        <button class="btn-icon" onclick="deleteNote(${index}), event.stopPropagation()"><img src="../assets/icons/delete.svg" alt="Delete"></button>
        <button class="btn-icon" onclick="pushLabelNote(${index}), event.stopPropagation()"><img src="../assets/icons/label.svg" alt="Label"></button>
      </div>
    </div>
  `;
}

function showNoteOverlay(index) {
  return /*html*/ `
    <div class="note-overlay-card" onclick="event.stopPropagation()">
      <h1>${titles[index]}</h1>
      <hr/>
      <p>${notes[index]}</p>
      <hr/>
      <div class="note-actions">
        <button class="btn-icon" onclick="deleteNote(${index}), closeOverlay()">
          <img src="../assets/icons/delete.svg" alt="Delete">
        </button>
        <button class="btn-icon" onclick="pushLabelNote(${index}), closeOverlay()">
          <img src="../assets/icons/label.svg" alt="Label">
        </button>
      </div>
    </div>
  `;
}

function getLabelTemplate(index) {
  return /*html*/ `
    <div class="label-card" onclick="toggleLabelOverlay(${index})">
      <h2>${labelTitle[index]}</h2>
      <hr/>
      <p>${labelNote[index]}</p>
    </div>
  `;
}

function showLabelNoteOverlay(index) {
  return /*html*/ `
    <div class="note-overlay-card" onclick="event.stopPropagation()">
      <h1>${labelTitle[index]}</h1>
      <hr/>
      <p>${labelNote[index]}</p>
      <hr/>
      <div class="note-actions">
        <button class="btn-icon" onclick="enlabelNote(${index}), closeOverlay()">
          <img src="../assets/icons/enlabel.svg" alt="Enlabel">
        </button>
      </div>
    </div>
  `;
}
