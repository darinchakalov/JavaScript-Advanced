window.addEventListener("load", solve);

function solve() {
    let total = 0;

    let model = document.querySelector("#model");
    let year = document.querySelector("#year");
    let description = document.querySelector("#description");
    let price = document.querySelector("#price");
    let addBtn = document.querySelector("#add");
    let furnitureList = document.querySelector("#furniture-list");
    let totalPrice = document.querySelector("#information > tfoot > tr > td.total-price");

    model.value = "Chair";
    year.value = 2016;
    description.value = "Comfortable for you and your pet";
    price.value = 48;

    addBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (!model.value || !year.value || !description.value || !price.value || !year.value > 0 || !price.value > 0) {
            return;
        }
        //creating the table row with the furniture info
        let currentTr = document.createElement("TR");
        currentTr.classList.add("info");
        let currentModel = document.createElement("td");
        currentModel.textContent = model.value;
        let currentPrice = document.createElement("td");
        currentPrice.textContent = Number(price.value).toFixed(2);
        let buttonTd = document.createElement("td");
        let moreBtn = document.createElement("button");
        let buyBtn = document.createElement("button");
        moreBtn.classList.add("moreBtn");
        moreBtn.textContent = "More Info";
        buyBtn.classList.add("buyBtn");
        buyBtn.textContent = "Buy it";
        buttonTd.appendChild(moreBtn);
        buttonTd.appendChild(buyBtn);
        currentTr.appendChild(currentModel);
        currentTr.appendChild(currentPrice);
        currentTr.appendChild(buttonTd);
        //creating the hiddne table row
        let hiddenTr = document.createElement("tr");
        hiddenTr.classList.add("hide");
        let currentYear = document.createElement("td");
        currentYear.textContent = `Year: ${year.value}`;
        let currentDescription = document.createElement("td");
        currentDescription.colSpan = 3;
        currentDescription.textContent = `Description: ${description.value}`;
        hiddenTr.appendChild(currentYear);
        hiddenTr.appendChild(currentDescription);
        furnitureList.appendChild(currentTr);
        furnitureList.appendChild(hiddenTr);

        Array.from(furnitureList.querySelectorAll("button")).forEach((btn) => {
            btn.addEventListener("click", () => {
                if (btn.classList.contains("moreBtn")) {
                    let currentInfoBtn = btn;
                    if (currentInfoBtn.textContent === "More Info") {
                        currentInfoBtn.textContent = "Less Info";
                        hiddenTr.style.display = "contents";
                    } else {
                        currentInfoBtn.textContent = "More Info";
                        hiddenTr.style.display = "none";
                    }
                } else if (btn.classList.contains("buyBtn")) {
                    total += Number(currentPrice.textContent);
                    hiddenTr.style.display = "none";
                    btn.parentNode.parentNode.remove();
                    totalPrice.textContent = total.toFixed(2);
                }
            });
        });
    });
}
