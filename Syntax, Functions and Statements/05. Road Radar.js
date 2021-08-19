function solve(speed, area) {
    speed = Number(speed);
    let result;
    let difference;
    let print = "";
    let limit = 0;
    switch (area) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }
    difference = speed - limit;
    if (difference <= 20) {
        print = "speeding";
    } else if (difference > 20 && difference <= 40) {
        print = "excessive speeding";
    } else {
        print = "reckless driving";
    }
    result =
        speed <= limit
            ? `Driving ${speed} km/h in a ${limit} zone`
            : `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${print}`;
    console.log(result);
}
solve("21", "residential");
