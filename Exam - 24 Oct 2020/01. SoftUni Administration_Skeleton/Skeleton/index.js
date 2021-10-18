function solve() {
	let lecture = document.querySelector(
		"body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]"
	);
	let date = document.querySelector(
		"body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]"
	);
	let moduleName = document.querySelector(
		"body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select"
	);
	let addBtn = document.querySelector(
		"body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button"
	);

	let modulesSection = document.querySelector("body > main > section.user-view.section-view > div");

	lecture.value = "DOM";
	date.value = "2021-10-17T15:08";

	let modules = [];

	addBtn.addEventListener("click", (e) => {
		e.preventDefault();

		if (!lecture.value || !date.value || moduleName.value === "Select module") {
			return;
		}
		let moduleSectionName = `${moduleName.value.toUpperCase()}-MODULE`;
		let [dateValue, timeValue] = date.value.split("T");
		let newDateValue = dateValue.replace(/-/g, "/");

		let allH3s = Array.from(document.querySelectorAll("h3"));
		let currentModule = allH3s.find((e) => e.textContent === moduleSectionName);

		if (!currentModule) {
			let moduleDiv = createElement("div", null, modulesSection, "module");
			let moduleH3 = createElement("h3", moduleSectionName, moduleDiv);
			let moduleUL = createElement("ul", null, moduleDiv);
			let moduleLI = createElement("li", null, moduleUL, "flex");
			let moduleH4 = createElement("h4", `${lecture.value} - ${newDateValue} - ${timeValue}`, moduleLI);
			let deleteBtn = createElement("button", "Del", moduleLI, "red");
			deleteBtn.addEventListener("click", (e) => {
				e.preventDefault();
				if(moduleLI.parentNode.children.length !== 1){
                    moduleLI.remove()
                } else {
                    moduleDiv.remove()
                }
			});
		} else {
			let moduleLI = createElement("li", null, currentModule.parentNode.children[1], "flex");
			let moduleH4 = createElement("h4", `${lecture.value} - ${newDateValue} - ${timeValue}`, moduleLI);
			let deleteBtn = createElement("button", "Del", moduleLI, "red");
			deleteBtn.addEventListener("click", (e) => {
				e.preventDefault();
                if(moduleLI.parentNode.children.length !== 1){
                    moduleLI.remove()
                } else {
                    moduleLI.parentNode.parentNode.remove()
                }
			});
		}

		let liArr = Array.from(currentModule.parentNode.children[1].children);
		liArr.sort((a, b) =>
			a.children[0].textContent.split(" - ")[1].localeCompare(b.children[0].textContent.split(" - ")[1])
		);
		currentModule.parentNode.children[1].innerHTML = "";
		liArr.forEach((e) => {
			currentModule.parentNode.children[1].appendChild(e);
		});
	});

	function createElement(type, content, parrent, className) {
		let current = document.createElement(type);
		current.textContent = content;
		if (parrent) {
			parrent.appendChild(current);
		}
		if (className) {
			current.classList.add(className);
		}
		return current;
	}
}
