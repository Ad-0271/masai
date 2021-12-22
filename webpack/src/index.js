import addNotes from "./addNotes.js";
import logo from "../public/make_note_logo.jpg";
import "../public/index.css";

const header = document.createElement("div");
header.classList.add("header");

const logo_div = document.createElement("div");
logo_div.classList.add("logo");

const img = document.createElement("img");
img.src = logo;
logo_div.appendChild(img);

const heading_div = document.createElement("div");

const heading = document.createElement("h1");
heading.innerHTML = "Make Notes!";
heading_div.appendChild(heading);

header.append(logo_div, heading_div);

const mid_div = document.createElement("div");
mid_div.classList.add("middle-section");

const text = document.createElement("textarea");
text.classList.add("text-area");
text.id = "notes";

const btn_div = document.createElement("div");

const btn = document.createElement("button");
btn.innerHTML = "Note it";
btn.onclick = () => {
  addNotes();
};

btn_div.append(btn);

mid_div.append(text, btn_div);

const footer = document.createElement("div");

const notes_heading = document.createElement("h2");
notes_heading.innerHTML = "Notes!";

const notes_div = document.createElement("div");
notes_div.classList.add("notes_div");
notes_div.id = "notes_div";

footer.append(notes_heading, notes_div);

document.getElementById("root").append(header, mid_div, footer);
