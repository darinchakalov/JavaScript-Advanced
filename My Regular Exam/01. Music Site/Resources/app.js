window.addEventListener("load", solve);

function solve() {
	let genre = document.querySelector("#genre");
	let songName = document.querySelector("#name");
	let author = document.querySelector("#author");
	let creationDate = document.querySelector("#date");
	let addBtn = document.querySelector("#add-btn");
	let allHitsDiv = document.querySelector("#all-hits > div");
	let savedSongsDiv = document.querySelector("#saved-hits > div");
	let totalLikes = document.querySelector("#total-likes > div > p");

	genre.value = `Pop`;
	songName.value = `Pon De Replay`;
	author.value = "Rihanna";
	creationDate.value = "26.11.2009";

	let totalLikesCount = 0;

	addBtn.addEventListener("click", (e) => {
		e.preventDefault();

		if (!genre.value || !songName.value || !author.value || !creationDate.value) {
			return;
		}
		let hitDiv = createElelement("div", null, allHitsDiv, "hits-info");
		let image = createElelement("img", null, hitDiv);
		image.src = "./static/img/img.png";
		let genreH2 = createElelement("h2", `Genre: ${genre.value}`, hitDiv);
		let nameH2 = createElelement("h2", `Name: ${songName.value}`, hitDiv);
		let authorH2 = createElelement("h2", `Author: ${author.value}`, hitDiv);
		let dateH3 = createElelement("h3", `Date: ${creationDate.value}`, hitDiv);
		let saveBtn = createElelement("button", `Save song`, hitDiv, "save-btn");
		let likeBtn = createElelement("button", "Like song", hitDiv, "like-btn");
		let deleteBtn = createElelement("button", `Delete`, hitDiv, "delete-btn");

		genre.value = ``;
		songName.value = ``;
		author.value = "";
		creationDate.value = "";

		likeBtn.addEventListener("click", (e) => {
			e.preventDefault();
			totalLikesCount++;
			totalLikes.textContent = `Total Likes: ${totalLikesCount}`;
			e.target.disabled = true;
		});

		saveBtn.addEventListener("click", (e) => {
			e.preventDefault();
			savedSongsDiv.appendChild(hitDiv);
			e.target.remove();
			likeBtn.remove();
		});

		deleteBtn.addEventListener("click", (e) => {
			e.preventDefault();
			hitDiv.remove();
		});
	});

	function createElelement(type, content, parent, className) {
		const element = document.createElement(type);
		element.textContent = content;
		if (parent) {
			parent.appendChild(element);
		}
		if (className) {
			element.classList.add(className);
		}
		return element;
	}
}
