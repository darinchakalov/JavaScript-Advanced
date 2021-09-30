function solve() {
    let movieSection = document.querySelector("#movies > ul");
    let archiveSection = document.querySelector("#archive ul");
    let onScreenBtn = document.querySelectorAll("button")[0];
    onScreenBtn.type = "button";

    document.querySelector("#archive > button").addEventListener("click", () => {
        archiveSection.innerHTML = null;
    });

    onScreenBtn.addEventListener("click", onScreen);

    function onScreen() {
        let name = document.querySelector("#container > input[type=text]:nth-child(1)").value;
        let hall = document.querySelector("#container > input[type=text]:nth-child(2)").value;
        let price = document.querySelector("#container > input[type=text]:nth-child(3)").value;

        if ((name && hall && Number(price)) || price === "0") {
            movieSection.innerHTML += `<li>
                <span>${name}</span>
                <strong>Hall: ${hall}</strong>
                <div>
                    <strong>${Number(price).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button>Archive</button>
                </div>
            </li>`;
            document.querySelector("#container > input[type=text]:nth-child(1)").value = null;
            document.querySelector("#container > input[type=text]:nth-child(2)").value = null;
            document.querySelector("#container > input[type=text]:nth-child(3)").value = null;
        }

        Array.from(movieSection.querySelectorAll("button")).forEach(btn => {
            btn.addEventListener("click", moveToArchive);
        });

        function moveToArchive(btn) {
            let currentName = btn.target.parentNode.parentNode.children[0].textContent;
            let currentPrice = btn.target.parentNode.children[0].textContent;
            let sold = btn.target.parentNode.children[1].value;
            console.log(sold, currentPrice);
            let totalCost = Number(currentPrice) * Number(sold);

            if (Number(sold) || sold === "0") {
                archiveSection.innerHTML += `<li>
                    <span>${currentName}</span>
                    <strong>Total amount: ${totalCost.toFixed(2)}</strong>
                    <button>Delete</button>
                </li>`;

                btn.target.parentNode.parentNode.remove();

                Array.from(archiveSection.querySelectorAll("button")).forEach(btn => {
                    btn.addEventListener("click", function (btn) {
                        btn.target.parentNode.remove();
                    });
                });
            }
        }
    }
}

// function clear() {
//     document.querySelectorAll('#container input').forEach(el => {
//         el.value = null
//     });
// }
