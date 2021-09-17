function addItem() {
    let text = document.querySelector("#newItemText").value;
    let inputValue = document.querySelector("#newItemValue").value;
    let dropDownMenu = document.querySelector("#menu")
    let newOption = document.createElement('option')
    
    newOption.value = inputValue;
    newOption.textContent = text;

    dropDownMenu.appendChild(newOption)
    document.querySelector("#newItemText").value = ''
    document.querySelector("#newItemValue").value = ''
}
