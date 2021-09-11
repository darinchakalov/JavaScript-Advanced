function solve() {
    let text = document
        .getElementById("input")
        .value.split(".")
        .filter((p) => p.length > 0);
    let output = document.getElementById("output");
    
    for (let i = 0; i < text.length; i+=3) {
        let arr = []
        for (let j = 0; j < 3; j++) {
            if (text[i+j]) {
                arr.push(text[i+j])
            }          
        }
        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`
    }
}
