function solve() {
    let text = document.getElementById("text").value;
    let whatDo = document.getElementById("naming-convention").value;
    let words = text.split(" ");
    let result = "";
    console.log(whatDo);
    if (whatDo === 'Camel Case' || whatDo === 'Pascal Case') {
        for (let word of words) {
            let newWord = word.toLowerCase();
            let first = newWord[0].toUpperCase();
            newWord = newWord.replace(newWord[0], first);
            result += newWord;
        }
    } else {
      result = 'Error!'
    }
    if (whatDo === "Camel Case") {
        result = result.replace(result[0], result[0].toLowerCase());
    }
    document.getElementById("result").textContent = result;
}
