function solve() {
    let buttons = document.getElementsByClassName("add-product");
    let textArea = document.querySelector("body > div > textarea");
    sum = 0;
    products = [];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let productName = document.querySelector(
                `body > div.shopping-cart > div:nth-child(${i + 2}) > div.product-details > div`
            ).textContent;
            let productPrice = document.querySelector(
                `body > div.shopping-cart > div:nth-child(${i + 2}) > div.product-line-price`
            ).textContent;
            document.querySelector("body > div.shopping-cart > textarea").value += `Added ${productName} for ${Number(
                productPrice
            ).toFixed(2)} to the cart.\n`;
            if (!products.includes(productName)) {
                products.push(productName);
            }
            sum += Number(productPrice);
        });
    }
    document.querySelector("body > div.shopping-cart > button").addEventListener("click", function () {
        document.querySelector("body > div.shopping-cart > textarea").value += `You bought ${products.join(
            ", "
        )} for ${sum.toFixed(2)}.`;
        disableAllButtons();
    });

    function disableAllButtons() {
        let allButtons = Array.from(document.getElementsByTagName("button"));
        allButtons.forEach((e) => {
            e.disabled = true;
        });
    }
}
