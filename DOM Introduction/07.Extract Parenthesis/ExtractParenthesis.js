function extract(content) {
    let matches = document.getElementById(content).textContent.match(/\([A-Za-z\s]+\)/g);
    let result = []
    for (let match of matches) {
        result.push(match.substring(1, match.length-1))
    }
    return result.join('; ')
}