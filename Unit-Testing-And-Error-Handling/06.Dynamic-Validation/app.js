function validate() {
    let emailField = document.querySelector("#email");
    let emailValidator = /[a-z.]+@[a-z]+.[a-z]+/;

    emailField.addEventListener("change", () => {
        if (!emailValidator.test(emailField.value)) {
            emailField.classList.add("error");
        } else {
            emailField.classList.remove("error");
        }
    });
}
