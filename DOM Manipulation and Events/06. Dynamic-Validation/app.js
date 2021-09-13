function validate() {
    let inputField = document.querySelector("#email");
    let input = inputField.value;
    let rgx = /([a-z]+)@[a-z]+.[a-z]+/
    inputField.addEventListener('change', function (e) {
        if (!e.currentTarget.value.match(rgx)) {
            e.currentTarget.classList.add('error')
        } else {
            e.currentTarget.classList.remove('error')
        }
    })
}