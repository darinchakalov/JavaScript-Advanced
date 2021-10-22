function solution() {
	"use strict";
	let giftName = document.querySelector(".card input");
	let addBtn = document.querySelector("body > div.container > section:nth-child(1) > div > button");
	let listOfGifts = document.querySelector(".card ul");
	let sentGifts = document.querySelector("body > div.container > section:nth-child(3) > ul");
	let discardedGifts = document.querySelector("body > div.container > section:nth-child(4) > ul");

	let presents = [];

	addBtn.addEventListener("click", (e) => {
		e.preventDefault();

		let newGift = document.createElement("li");
		newGift.classList.add("gift");
		newGift.textContent = giftName.value;
		let sendBtn = document.createElement("button");
		sendBtn.textContent = "Send";
		sendBtn.id = "sendButton";
		let discardBtn = document.createElement("button");
		discardBtn.textContent = "Discard";
		discardBtn.id = "discardButton";

		newGift.appendChild(sendBtn);
		newGift.appendChild(discardBtn);
		listOfGifts.appendChild(newGift);

		let liElements = Array.from(listOfGifts.querySelectorAll("li"));
		liElements.sort((a, b) => a.textContent.localeCompare(b.textContent));

		while (listOfGifts.firstChild) {
			listOfGifts.firstChild.remove();
		}

		liElements.forEach((li) => {
			listOfGifts.appendChild(li);
		});

		giftName.value = null;

        sendBtn.addEventListener('click', (e) => {
            e.preventDefault()

            ///Removing the current button and the other one
            e.target.remove()
            discardBtn.remove()
            sentGifts.appendChild(newGift)
        })
        discardBtn.addEventListener('click', (e) => {
            e.preventDefault()

            ///Removing the current button and the other one
            e.target.remove()
            sendBtn.remove()
            discardedGifts.appendChild(newGift)
        })

	});
}
