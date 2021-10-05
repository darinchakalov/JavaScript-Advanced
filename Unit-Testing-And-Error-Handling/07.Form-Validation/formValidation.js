function validate() {
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let passConfirm = document.querySelector("#confirm-password");
    let companyField = document.querySelector("#companyInfo");
    let submitBtn = document.querySelector("#submit");
    let companyNumber = document.querySelector("#companyNumber");
    let usernameValidator = /^[A-Za-z0-9]{3,20}$/;
    let emailValidator = /^[^@.]+@[^@]*\.[^@]*$/;
    let passwordValidator = /^[\w]{5,15}$/;

    let companyCheckbox = document.querySelector("#company");
    companyCheckbox.addEventListener("change", () => {
        if ((companyCheckbox.checked = "true")) {
            companyField.style.display = "block";
        } else {
            companyField.style.display = "none";
        }
    });

    submitBtn.addEventListener("click", function (event) {
        if (!usernameValidator.test(username.value)) {
            username.style.borderColor = "red";
        } else {
            username.style.border = "none";
        }
        if (!emailValidator.test(email.value)) {
            email.style.borderColor = "red";
        } else {
            email.style.border = "none";
        }
        if (!(passwordValidator.test(password.value) || passwordValidator.test(passConfirm.value))) {
            password.style.borderColor = "red";
            passConfirm.style.borderColor = "red";
        } else {
            if (password.value !== passConfirm.value) {
                password.style.borderColor = "red";
                passConfirm.style.borderColor = "red";
            } else {
                password.style.border = "none";
                passConfirm.style.border = "none";
            }
        }
        if (companyField.style.display === "block") {
            if (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999) {
                companyNumber.style.border = "none";
            } else {
                companyNumber.style.borderColor = "red";
            }
        }
        event.preventDefault();
        let hasRedBorder = (element) => element.style.borderColor === "red";
        if (!Array.from(document.querySelectorAll("input")).some(hasRedBorder)) {
            document.querySelector("#valid").style.display = "block";
        }
        event.preventDefault();
    });
}
