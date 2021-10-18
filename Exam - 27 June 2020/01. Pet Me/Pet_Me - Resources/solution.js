function solve() {
	let name = document.querySelector("#container > input[type=text]:nth-child(1)");
	let age = document.querySelector("#container > input[type=text]:nth-child(2)");
	let kind = document.querySelector("#container > input[type=text]:nth-child(3)");
	let currentOwner = document.querySelector("#container > input[type=text]:nth-child(4)");
	let addBtn = document.querySelector("#container > button");

	let newFriends = document.querySelector("#adoption > ul");
	let newHome = document.querySelector("#adopted > ul");

	name.value = "Tom";
	age.value = 1.5;
	kind.value = "cat";
	currentOwner.value = "Jim King";

	addBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (!name.value || !age.value || !kind.value || !currentOwner.value || !Number(age.value)) {
			return;
		}
		let petLi = createElement("li", null, newFriends);
		let paragraphText = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
		let petP = createElement("p", null, petLi, paragraphText);
		let ownerSpan = createElement("span", `Owner: ${currentOwner.value}`, petLi);
		let contactBtn = createElement("button", `Contact with owner`, petLi);

        name.value = '';
		age.value = '';
		kind.value = '';
		currentOwner.value = '';

		contactBtn.addEventListener("click", (e) => {
			e.preventDefault();
			e.target.remove();
			let newDiv = createElement("div", null, petLi);
			let newInput = createElement("input", null, newDiv);
			newInput.placeholder = "Enter your names";
			let newBtn = createElement("button", "Yes! I take it!", newDiv);

			newBtn.addEventListener("click", (e) => {
				e.preventDefault();
				if (!newInput.value) {
				e.target.remove();
					return;
				}
				ownerSpan.remove();
                newDiv.remove()
				let newOwenerSpan = createElement("span", `New Owner: ${newInput.value}`, petLi);
				let checkedBtn = createElement("button", "Checked", petLi);
				newHome.appendChild(petLi);
				newInput.remove();

				checkedBtn.addEventListener("click", (e) => {
					e.preventDefault();
					petLi.remove();
				});
			});
		});

	});
	function createElement(type, content, parent, innerHtml) {
		let current = document.createElement(type);
		current.textContent = content;
		if (parent) {
			parent.appendChild(current);
		}
		if (innerHtml) {
			current.innerHTML += innerHtml;
		}
		return current;
	}
}
