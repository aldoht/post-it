const form = document.getElementById("text-input");

form.addEventListener("submit", function(e) {
	e.preventDefault();
	createPostit();
})

const addMore = document.getElementsByClassName("add-more")[0].firstElementChild;

addMore.addEventListener("click", function() {
	createPostit();
})

const colors = ["#ff4d47", "#e7bfb6", "#efc900", "#dd9880", "#95E8A3", "#86E7F3", "#95e1c8", "#ffd265", "#b791cb", "#bfbcf4", "#BBDF32", "#c67f52"];

function createPostit() {
	let postitText = document.getElementById("note-content").value;
	if (postitText === "")
		return;
	const newPostit = document.createElement("div");
	newPostit.style.backgroundColor = colors[getRandomInt(colors.length)];
	const text = document.createElement("p");
	text.innerText = postitText;
	text.style.padding = "0 1rem";
	text.style.wordBreak = "break-word";
	text.style.width = "85%";
	newPostit.appendChild(text);
	newPostit.classList.add("post-it");
	document.getElementsByClassName("post-it-container")[0].appendChild(newPostit);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let allNotes = document.getElementsByClassName("post-it");
setInterval(() => {
	if (allNotes.length === 1)
		return;
	for (let note of allNotes) {
		if (note.classList.length > 1)
			continue;
		note.addEventListener("dblclick", function() {
			note.style.display = "none";
		})
	}
}, 1000);