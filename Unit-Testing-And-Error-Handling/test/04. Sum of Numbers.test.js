const sum = require("../04. Sum of Numbers");
const assert = require("chai").assert;

it("It should add positive numbers", () => {
    // Arange
    let input = [1, 2, 3, 4, 5];
    let expectedResult = 15;
    // Act
    let actualResult = sum(input);
    // Assert
    assert.strictEqual(actualResult, expectedResult)



    // if (expectedResult === actualResult) {
    //     console.log('Passing');
    // } else {
    //     throw new Error('Sum should be 15')
    // }
});
