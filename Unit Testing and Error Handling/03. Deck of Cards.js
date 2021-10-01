function solve(deck) {
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuits = ["S", "H", "D", "C"];
    let result = [];
    let hasInvalidCard = false;
    for (const card of deck) {
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1];
        if (validFaces.includes(face) && validSuits.includes(suit)) {
            switch (suit) {
                case "S":
                    result.push(face + "\u2660");
                    break;
                case "H":
                    result.push(face + "\u2665");
                    break;
                case "D":
                    result.push(face + "\u2666");
                    break;
                case "C":
                    result.push(face + "\u2663");
                    break;
            }
        } else {
            hasInvalidCard = true;
            console.log(`Invalid card: ${card}`);
            break;
        }
    }
    if (!hasInvalidCard) {
        console.log(result.join(" "));
    }
}
solve(["AS", "10D", "KH", "2C"]);
solve(["5S", "3D", "QD", "1C"]);
