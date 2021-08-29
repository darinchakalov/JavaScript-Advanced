function editElement(element, match, replace) {
    let text = element.textContent;
    let regex = new RegExp(match, 'g')
    let edited = text.replace(regex, replace)
    element.textContent = edited;
}
editElement();
