function solve() {
	let author = document.querySelector("#creator");
	let title = document.querySelector("#title");
	let category = document.querySelector("#category");
	let content = document.querySelector("#content");
	let createBtn = document.querySelector("body > div.site > div > aside > section:nth-child(1) > form > button");
	let postSection = document.querySelector("body > div.site > div > main > section");
    let archiveSection = document.querySelector("body > div.site > div > aside > section.archive-section > ol")

	// author.value = "John";
	// title.value = "JavaScript";
	// category.value = "Programming";
	// content.value = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    let articlesArr = []

	createBtn.addEventListener("click", (e) => {
		e.preventDefault();

		if (!author.value || !title.value || !category.value || !content.value) {
			return;
		}

		let article = createElement("article", null, postSection);
		let articleHeading = createElement("h1", title.value, article);
		let categoryParagraph = createElement("p", `Category:`, article);
		let categoryStrong = createElement("strong", category.value, categoryParagraph);
		let authorParagraph = createElement("p", `Creator:`, article);
		let authorStrong = createElement("strong", author.value, authorParagraph);
		let contentParagraph = createElement("p", content.value, article);
		let buttonsDiv = createElement("div", null, article, "buttons");
		let deleteBtn = createElement("button", "Delete", buttonsDiv, "btn");
        deleteBtn.classList.add('delete')
		let archiveBtn = createElement("button", "Archive", buttonsDiv, "btn");
        archiveBtn.classList.add('archive')

        archiveBtn.addEventListener('click', (e) => {
            e.preventDefault()
            let articleName = articleHeading.textContent
            article.remove()
            articlesArr.push(articleName)
            articlesArr.sort((a,b) => a.localeCompare(b))
            archiveSection.innerHTML = ''
            articlesArr.forEach(article => {
                let current = createElement('li', article, archiveSection)
            });
        })  

        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault()
            article.remove()
        })
	});

	function createElement(type, content, parent, className) {
		let current = document.createElement(type);
		current.textContent = content;
		if (parent) {
			parent.appendChild(current);
		}
		if (className) {
			current.classList.add(className);
		}
		return current;
	}
}
