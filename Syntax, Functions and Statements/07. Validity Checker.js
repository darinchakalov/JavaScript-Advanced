function solve(x1, y1, x2, y2) {
    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(printMessage(x1, y1, 0, 0) + " valid");
    } else {
        console.log(printMessage(x1, y1, 0, 0) + " invalid");
    }
    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(printMessage(x2, y2, 0, 0) + " valid");
    } else {
        console.log(printMessage(x2, y2, 0, 0) + " invalid");
    }
    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(printMessage(x1, y1, x2, y2) + " valid");
    } else {
        console.log(printMessage(x1, y1, x2, y2) + " invalid");
    }

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH ** 2 + distY ** 2);
    }
    function printMessage(x1, y1, x2, y2) {
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is`;
    }
}
solve(2,1,1,1);
