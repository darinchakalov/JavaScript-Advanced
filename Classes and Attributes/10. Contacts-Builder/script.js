function solve() {
    class Contact {
        constructor(firstName, LastName, phone, email) {
            this.firstName = firstName;
            this.LastName = LastName;
            this.phone = phone;
            this.email = email;
            this.online = false;
        }
        render(id) {
            let contactArticle = document.createElement("article");
            let titleDiv = document.createElement("div");
            let infoBtn = document.createElement("button");
            let infoDiv = document.createElement("div");
            let phoneSpan = document.createElement("span");
            let emailSpan = document.createElement("span");

            infoBtn.textContent = "\u260E";

            phoneSpan.textContent = `${"\u260E"} ${this.phone}`;
            emailSpan.textContent = `${"\u260E"} ${this.email}`;
            infoDiv.className = "info";

            infoDiv.appendChild(phoneSpan);
            infoDiv.appendChild(emailSpan);

            //titleDiv.className = 'title'
            titleDiv.textContent = `${this.firstName} ${this.LastName}`;
            titleDiv.classList.add("title");
            titleDiv.appendChild(infoBtn);

            infoDiv.style.display = "none";

            infoBtn.addEventListener("click", () => {
                if (infoDiv.style.display === "none") {
                    infoDiv.style.display = "block";
                } else {
                    infoDiv.style.display = "none";
                }
            });

            contactArticle.appendChild(titleDiv);
            contactArticle.appendChild(infoDiv);

            let attachDiv = document.getElementById(id);
            attachDiv.appendChild(contactArticle);
            if (this.online === true) {
                titleDiv.classList.add("online");
            } else {
                titleDiv.classList.remove("online");
            }
        }
    }

    let contact = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
    contact.render("main");
    contact.online = true;

    //setTimeout(() => contacts[1].online = true, 2000);
}
