function solve() {
    let input = document.querySelectorAll("textarea")[0];
    let generateBtn = document.querySelectorAll("button")[0];
    let buyBtn = document.querySelectorAll("button")[1];
    let table = document.querySelector("#exercise > div > div > div > div > table > tbody");
    document.querySelector(
        "#exercise > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > input[type=checkbox]"
    ).disabled = false;

        /// create arrays for each div
        // then for each new object (module) push in the array and sort by date
        // create function which will convert the object into html element
        


    generateBtn.addEventListener("click", () => {
        let products = JSON.parse(input.value);
        for (const product of products) {
            let newRow = document.createElement("tr");
            let imgTD = document.createElement("td");
            let img = document.createElement("img");
            img.src = product.img;
            imgTD.appendChild(img);

            let nameTD = document.createElement("td");
            let name = document.createElement("p");
            name.textContent = product.name;
            nameTD.appendChild(name);

            let priceTD = document.createElement("td");
            let price = document.createElement("p");
            price.textContent = product.price;
            priceTD.appendChild(price);

            let decorationTD = document.createElement("td");
            let decoration = document.createElement("p");
            decoration.textContent = product.decFactor;
            decorationTD.appendChild(decoration);

            let checkboxTD = document.createElement("td");
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkboxTD.appendChild(checkbox);

            newRow.appendChild(imgTD);
            newRow.appendChild(nameTD);
            newRow.appendChild(priceTD);
            newRow.appendChild(decorationTD);
            newRow.appendChild(checkboxTD);
            table.appendChild(newRow);
        }
    });

    buyBtn.addEventListener("click", () => {
        let allTRs = document.querySelectorAll("tr");
        let productsArr = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        for (let i = 1; i < allTRs.length; i++) {
            let childArr = allTRs[i].children;
            let name = childArr[1].firstElementChild.textContent;
            let price = childArr[2].firstElementChild.textContent;
            let decFactor = childArr[3].firstElementChild.textContent;
            let checkbox = childArr[4].firstElementChild;
            if (checkbox.checked) {
                productsArr.push(name);
                totalPrice += Number(price);
                totalDecFactor += Number(decFactor);
            }
        }
        document.querySelectorAll("textarea")[1].value += `Bought furniture: ${productsArr.join(", ")}\n`;
        document.querySelectorAll("textarea")[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
        document.querySelectorAll("textarea")[1].value += `Average decoration factor: ${
            totalDecFactor / productsArr.length
        }`;
    });
}
