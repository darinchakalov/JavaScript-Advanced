function solve() {
    document.querySelector("#container > button").addEventListener('click', onClick);
    
    let dropDown = document.querySelector("#selectMenuTo")
    let optionBinary = document.createElement('option')
    let optionHex = document.createElement('option')
    optionBinary.text = 'Binary'
    optionBinary.value = 'binary'
    optionHex.text = 'Hexadecimal'
    optionHex.value = 'hexadecimal'
    dropDown.add(optionBinary)
    dropDown.add(optionHex)
    function onClick() {
        let input = Number(document.getElementById('input').value)
        console.log(input);
        let select = document.querySelector("#selectMenuTo")
        let selectedDrop = select.options[select.selectedIndex].value
        
        if (selectedDrop === 'binary') {
            document.querySelector("#result").value = input.toString(2)
        } else if (selectedDrop === 'hexadecimal') {
            document.querySelector("#result").value = input.toString(16).toUpperCase()
        }
    }
}