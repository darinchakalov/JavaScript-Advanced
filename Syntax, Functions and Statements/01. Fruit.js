function solve(fruit, weigth, price) {
    console.log(`I need $${((weigth/1000)*price).toFixed(2)} to buy ${(weigth/1000).toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.8)