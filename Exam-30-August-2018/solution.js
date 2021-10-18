function addDestination() {
	let city = document.querySelector("#input > input:nth-child(2)");
	let country = document.querySelector("#input > input:nth-child(4)");
	let season = document.querySelector("#seasons");
	let table = document.querySelector("#destinationsList");

	let totalSummer = document.querySelector("#summer");
	let totalAutumn = document.querySelector("#autumn");
	let totalWinter = document.querySelector("#winter");
	let totalSpring = document.querySelector("#spring");

	if (!city.value || !country.value) {
		return;
	}
	let tableRow = createEl("tr", null, table);
	let destinationTD = createEl("td", `${city.value}, ${country.value}`, tableRow);
	let seasonTD = createEl("td", season.value.charAt(0).toUpperCase() + season.value.slice(1), tableRow);

	switch (season.value) {
		case "summer":
			totalSummer.value++;
			break;
		case "autumn":
			totalAutumn.value++;
			break;
		case "winter":
			totalWinter.value++;
			break;
		case "spring":
			totalSpring.value++;
			break;
	}
	city.value = null;
	country.value = null;

	function createEl(type, content, parent) {
		const element = document.createElement(type);
		element.textContent = content;
		if (parent) {
			parent.appendChild(element);
		}
		return element;
	}
}
