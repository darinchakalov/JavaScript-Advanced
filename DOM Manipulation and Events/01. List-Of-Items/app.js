function addItem() {
    let inputText = document.querySelector("#newItemText").value;
    let list = document.querySelector("#items");
    let newItem = document.createElement("li");
    newItem.textContent = inputText;
    list.appendChild(newItem);
    document.querySelector("#newItemText").value = "";
}
