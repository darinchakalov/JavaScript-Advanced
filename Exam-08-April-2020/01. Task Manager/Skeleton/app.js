function solve() {
	let taskName = document.querySelector("#task");
	let description = document.querySelector("#description");
	let dueDate = document.querySelector("#date");
	let addBtn = document.querySelector("#add");
	let sections = document.querySelectorAll("section");

	let openSection = sections[1].children[1];
	let inProgressSection = sections[2].children[1];
	let completeSection = sections[3].children[1];

	taskName.value = "JS Advanced";
	description.value = "Heavy learning";
	dueDate.value = "2020.04.14";

	addBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (!taskName.value || !description.value || !dueDate.value) {
			return;
		}
		
        let article = createEl('article', null, openSection)
        let taskNameH3 = createEl('h3', taskName.value, article)
        let descriptionParagraph = createEl('p', `Description: ${description.value}`, article)
        let dueDateParagraph = createEl('p', `Due Date: ${dueDate.value}`, article)
        let buttonsDiv = createEl('div', null, article, 'flex')
        let startBtn = createEl('button', 'Start', buttonsDiv, 'green')
        let deleteBtn = createEl('button', 'Delete', buttonsDiv, 'red')

        startBtn.addEventListener('click', (e) => {
            e.preventDefault()
            inProgressSection.appendChild(article)
            e.target.remove()
            let finishBtn = createEl('button', 'Finish', buttonsDiv, 'orange')

            finishBtn.addEventListener('click', (e) => {
                e.preventDefault()
                completeSection.appendChild(article)
                buttonsDiv.remove()
            })
        })
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.parentNode.parentNode.remove()
        })

	});

    function createEl(type, content, parent, setClass) {
		const element = document.createElement(type);
		element.textContent = content;
		if (parent) {
			parent.appendChild(element);
		}
        if (setClass) {
            element.classList.add(setClass)
        }
		return element;
	}
}
