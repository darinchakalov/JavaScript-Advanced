window.addEventListener("load", solution);

function solution() {
	let fullName = document.getElementById("fname");
	let email = document.getElementById("email");
	let phone = document.getElementById("phone");
	let address = document.getElementById("address");
	let postCode = document.getElementById("code");
	let submitBtn = document.getElementById("submitBTN");

	let preview = document.getElementById("infoPreview");
	let editBtn = document.getElementById("editBTN");
	let continueBtn = document.getElementById("continueBTN");

	let fullNameValue;
	let emailValue;
	let phoneValue;
	let addressValue;
	let postCodeValue;

	submitBtn.addEventListener("click", () => {
		if (fullName.value === "" || email.value === "") {
			return;
		}

		document.getElementById("submitBTN").disabled = true;
		document.getElementById("editBTN").disabled = false;
		document.getElementById("continueBTN").disabled = false;

		fullNameValue = fullName.value;
		emailValue = email.value;
		phoneValue = phone.value;
		addressValue = address.value;
		postCodeValue = postCode.value;

		createEl("li", "Full Name: " + fullNameValue, preview);
		createEl("li", "Email: " + emailValue, preview);
		createEl("li", "Phone Number: " + phoneValue, preview);
		createEl("li", "Address: " + addressValue, preview);
		createEl("li", "Postal Code: " + postCodeValue, preview);

		clearInputs();
	});

	editBtn.addEventListener("click", () => {
		document.getElementById("infoPreview").innerHTML = "";

		document.getElementById("submitBTN").disabled = false;
		document.getElementById("editBTN").disabled = true;
		document.getElementById("continueBTN").disabled = true;

		fullName.value = fullNameValue;
		email.value = emailValue;
		phone.value = phoneValue;
		address.value = addressValue;
		postCode.value = postCodeValue;
	});

	continueBtn.addEventListener("click", () => {
		document.getElementById("block").innerHTML = "";

		createEl("h3", `Thank you for your reservation!`, document.getElementById("block"));
	});

	function createEl(type, content, parent) {
		const element = document.createElement(type);
		element.textContent = content;
		if (parent) {
			parent.appendChild(element);
		}
		return element;
	}

	function clearInputs() {
		document.getElementById("fname").value = '';
		document.getElementById("email").value = '';
		document.getElementById("phone").value = '';
		document.getElementById("address").value = '';
		document.getElementById("code").value = '';
	}
}
