function focused() {
    let allDivs = document.querySelectorAll("body > div:nth-child(1) > div");

    for (let i = 1; i <= allDivs.length; i++) {
        let currentDiv = document.querySelector(`body > div:nth-child(1) > div:nth-child(${i}) > input[type=text]`);
        console.log(currentDiv);
        currentDiv.addEventListener("focus", function (e) {
            e.currentTarget.parentNode.classList.add("focused");
        });
        currentDiv.addEventListener("blur", function (e) {
            e.currentTarget.parentNode.classList.remove("focused");
        });
    }
}
