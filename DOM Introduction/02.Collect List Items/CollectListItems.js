function extractText() {
    let listArr = Array.from(document.querySelectorAll("ul#items li"));
    let area = document.querySelector("#result");
    for (let node of listArr) {
        area.value += node.textContent + '\n'
    }
}
