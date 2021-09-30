function solve() {
    let inputs = document.querySelectorAll("input");
    let onScreenBtn = document.querySelectorAll("button")[0];
    let uls = document.querySelectorAll("ul");
    onScreenBtn.type = "button";
    onScreenBtn.addEventListener("click", onScreen);

    function onScreen() {
        let name = inputs[0].value;
        let hall = inputs[1].value;
        let price = Number(inputs[2].value);
        if (name && hall && Number(price) || price === '0') {
            let movieLi = document.createElement("li");
            let movieSpan = document.createElement("span");
            let movieStrong = document.createElement("strong");
            movieSpan.textContent = name;
            movieStrong.textContent = `Hall: ${hall}`;
            movieLi.appendChild(movieSpan);
            movieLi.appendChild(movieStrong);

            let movieDiv = document.createElement("div");
            let moviePrice = document.createElement("strong");
            moviePrice.textContent = price.toFixed(2);
            let sold = document.createElement("input");
            sold.type = "text";
            sold.placeholder = "Tickets Sold";
            let archiveBtn = document.createElement("button");
            archiveBtn.textContent = "Archive";
            archiveBtn.addEventListener("click", function () {
                if (Number(price)) {
                    let total = price * sold.value;
                    uls[1].appendChild(addToArchive(name, total));
                    let currentLi = this.parentNode.parentNode;
                    currentLi.remove();
                }
            });
            movieDiv.appendChild(moviePrice);
            movieDiv.appendChild(sold);
            movieDiv.appendChild(archiveBtn);
            movieLi.appendChild(movieDiv);

            uls[0].appendChild(movieLi);
            clear();
        }
    }

    function addToArchive(name, total) {
        let archiveLi = document.createElement("li");
        let archiveSpan = document.createElement("span");
        let archiveStrong = document.createElement("strong");
        archiveSpan.textContent = name;
        archiveStrong.textContent = `Total amount: ${total.toFixed(2)}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            let currentLi = this.parentNode;
            currentLi.remove();
        });
        archiveLi.appendChild(archiveSpan);
        archiveLi.appendChild(archiveStrong);
        archiveLi.appendChild(deleteBtn);
        return archiveLi;
    }

    let clearBtn = document.querySelectorAll("button")[1];
    clearBtn.addEventListener("click", function () {
        let archLiArr = Array.from(document.querySelector("#archive > ul").children);
        archLiArr.forEach((el) => {
            el.remove();
        });
    });

    function clear() {
        inputs.forEach((el) => {
            el.value = "";
        });
    }
}
