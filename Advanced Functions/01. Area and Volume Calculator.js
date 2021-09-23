function solve(area, vol, input) {
    let objects = JSON.parse(input);
    let result = [];

    for (const coordinates of objects) {
        let resultObj = {
            area: area.call(coordinates),
            volume: vol.call(coordinates),
        };

        result.push(resultObj);
    }
    return result;
}
console.log(solve(
    area,
    vol,
    `[{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}]`
));

solve(
    area,
    vol,
    `[{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}]`
);

function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}
