function lockedProfile() {
    for (let i = 1; i <= 3; i++) {
        let currentLockRadio = document.querySelector(`#main > div:nth-child(${i}) > input[type=radio]:nth-child(3)`)
        let currentUnlockRadio = document.querySelector(`#main > div:nth-child(${i}) > input[type=radio]:nth-child(5)`);
        let currentBtn = document.querySelector(`#main > div:nth-child(${i}) > button`);
        let currentUserHiddenField = document.querySelector(`#user${i}HiddenFields`);
        
        let radioTest = document.querySelectorAll(`#main > div:nth-child(${i}) > input[type=radio]`);
        
        if (currentUnlockRadio.checked === true) {
            currentLockRadio.checked = false
            currentBtn.addEventListener('click', function(){
                currentUserHiddenField.style.display = 'block'
                currentBtn.textContent = 'Hide it'
            })
        }

    }
}
