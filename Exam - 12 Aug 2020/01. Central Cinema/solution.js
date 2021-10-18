function solve() {
	let name = document.querySelector("#container > input[type=text]:nth-child(1)");
	let hall = document.querySelector("#container > input[type=text]:nth-child(2)");
	let price = document.querySelector("#container > input[type=text]:nth-child(3)");
	let onScreenBtn = document.querySelector("#container > button");

	let moviesUl = document.querySelector("#movies > ul");
	let archiveUL = document.querySelector("#archive > ul");
    

	name.value = "Avengers: Endgame";
	hall.value = "Main";
	price.value = 12;

	//Dont forget to clear the inputs after the button is clicked

	onScreenBtn.addEventListener("click", (e) => {
		e.preventDefault();
        let singleTicketPrice = Number(price.value)
		if (!name.value || !hall.value || !price.value || isNaN(singleTicketPrice*1)) {
			return;
		}
		let movieLi = createElement("li", null, moviesUl);
		let nameSpan = createElement("span", name.value, movieLi);
		let hallStrong = createElement("strong", `Hall: ${hall.value}`, movieLi);
		let movieDiv = createElement("div", null, movieLi);
		let priceStrong = createElement("strong", Number(price.value).toFixed(2), movieDiv);
		let ticketsSold = createElement("input", null, movieDiv);
		ticketsSold.placeholder = `Tickets Sold`;
		let archiveBtn = createElement("button", `Archive`, movieDiv);
		name.value = "";
		hall.value = "";
		price.value = "";
		archiveBtn.addEventListener("click", (e) => {
			e.preventDefault();
            let numberOfSoldTickets = Number(ticketsSold.value)
			if (!ticketsSold.value || isNaN(numberOfSoldTickets*1)) {
				return;
			}
			archiveUL.appendChild(movieLi);
			movieDiv.remove();
			let deleteBtn = createElement("button", "Delete", movieLi);
			hallStrong.textContent = `Total amount: ` + (Number(numberOfSoldTickets) * singleTicketPrice).toFixed(2);

			deleteBtn.addEventListener("click", (e) => {
				e.preventDefault();
				movieLi.remove();
			});
		});
	});

	document.querySelector("#archive > button").addEventListener("click", (e) => {
		e.preventDefault();
		archiveUL.innerHTML = "";
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
