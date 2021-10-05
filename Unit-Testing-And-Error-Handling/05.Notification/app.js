function notify(message) {
    let text = document.createElement('p')
    text.textContent = message
    let hiddenDiv = document.querySelector("#notification")
    hiddenDiv.style.display = 'block'
    hiddenDiv.appendChild(text)

    hiddenDiv.addEventListener('click', () => {
      hiddenDiv.style.display = 'none'
    })
}