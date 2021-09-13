function deleteByEmail() {
    let table = document.querySelectorAll("#customers > tbody > tr");
    let input = document.querySelector("body > label > input[type=text]").value;

    for (let i = 1; i <= table.length; i++) {
        let current = document.querySelector(`#customers > tbody > tr:nth-child(${i}) > td:nth-child(2)`);
        if (current.textContent === input) {
            let toBeRemoved = document.querySelector(`#customers > tbody > tr:nth-child(${i})`)
            toBeRemoved.parentNode.removeChild(toBeRemoved)
            document.querySelector("#result").textContent = 'Deleted.'
            return;
        } else {
            document.querySelector("#result").textContent = 'Not found.'
        }
    }
    document.querySelector("body > label > input[type=text]").value = ''
}
