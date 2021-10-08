function solve(arr, sortMethod) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];
    arr.forEach((line) => {
        let [destination, price, status] = line.split("|");
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });

    return result.sort((a, b) => {
        if (a[sortMethod] < b[sortMethod]) {
            return -1;
        }
        if (a[sortMethod] > b[sortMethod]) {
            return 1;
        }
        return 0;
    });
}
console.log(
    solve(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "destination"
    )
);

console.log();

console.log(
    solve(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "status"
    )
);
