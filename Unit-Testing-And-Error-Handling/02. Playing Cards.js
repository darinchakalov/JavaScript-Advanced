function solve(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A"];
    let validSuits = ["S", "H", "D", "C"];
    let result = "";
    if (validFaces.includes(face) && validSuits.includes(suit)) {
        switch (suit) {
            case "S":
                result += face+'\u2660'
                break;
            case "H":
                result += face+'\u2665'
                break;
            case "D":
                result += face+'\u2666'
                break;
            case "C":
                result += face+'\u2663'
                break;
        }
        return result
    } else {
        throw new Error('Error')
    }
}
console.log(solve('A','S'));
console.log(solve('10','H'));
console.log(solve(1,'S'));