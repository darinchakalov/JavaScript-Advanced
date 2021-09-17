function lockedProfile() {
    for (let i = 1; i <= 3; i++) {
        let currentBtn = document.querySelector(`#main > div:nth-child(${i}) > button`);
        let currentUserHiddenField = document.querySelector(`#user${i}HiddenFields`);

        currentBtn.addEventListener("click", () => {
            let currentUnlockRadio = document.querySelector(
                `#main > div:nth-child(${i}) > input[type=radio]:nth-child(5)`
            );
            if (currentUnlockRadio.checked) {
                currentUserHiddenField.style.display = "block";
                currentBtn.textContent = "Hide it";
            }
            if ((currentBtn.textContent = "Hide it")) {
                currentBtn.addEventListener("click", () => {
                    if (currentUnlockRadio.checked) {
                        currentUserHiddenField.style.display = "none";
                        currentBtn.textContent = "Show more";
                    }
                });
            }
        });
    }
}
