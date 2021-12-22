const addNotes = () => {
  const note = document.getElementById("notes").value;

  const notes_div = document.createElement("div");
  notes_div.innerText = note;

  document.getElementById("notes_div").append(notes_div);
};

export default addNotes;
