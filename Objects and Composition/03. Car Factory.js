function solve(input) {
    let newPower = 0;
    let volume = 0;
    if (input.power <= 90) {
        newPower = 90;
        volume = 1800;
    } else if (input.power > 90 && input.power <= 120) {
        newPower = 120;
        volume = 2400;
    } else {
        newPower = 200;
        volume = 3500;
    }
    let newWheelSize = 0;
    let wheelsArr = [];
    for (let i = 0; i < 4; i++) {
        if (input.wheelsize % 2 === 0) {
            newWheelSize = input.wheelsize - 1;
        } else {
            newWheelSize = input.wheelsize;
        }
        wheelsArr.push(newWheelSize);
    }

    let result = {
        model: input.model,
        engine: {
            power: newPower,
            volume: volume,
        },
        carriage: {
            type: input.carriage,
            color: input.color,
        },
        wheels: wheelsArr,
    };
    return result;
}
solve({ model: "VW Golf II", power: 90, color: "blue", carriage: "hatchback", wheelsize: 14 });
