function addItem() {
    let list = document.querySelector("#items");
    let input = document.querySelector("#newItemText").value;

    if (input.length === 0) {
        return;
    }

    let newListItem = document.createElement("li");
    newListItem.textContent = input;

    let remove = document.createElement("a");
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);
    newListItem.appendChild(remove);
    list.appendChild(newListItem);

    function deleteItem() {
        newListItem.remove();
    }

    document.querySelector("#newItemText").value = "";
}
