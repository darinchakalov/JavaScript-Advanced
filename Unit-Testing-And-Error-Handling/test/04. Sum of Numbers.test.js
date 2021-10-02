const sum = require("../04. Sum of Numbers");
const assert = require("chai").assert;

describe('Testing the sum functionality', () => {
    it("It should add positive numbers", () => {
        // Arange
        
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;
        // Act
    
        let actualResult = sum(input);
        // Assert
    
        assert.strictEqual(actualResult, expectedResult)
    });
    it("It should return false when add positive numbers", () => {
        let input = [10, 20, 30];
        let expectedResult = 15;
    
        let actualResult = sum(input);
    
        assert.notEqual(actualResult, expectedResult)
    });
    it("It should pass when adding negative numbers", () => {
        let input = [-10, -20, -30];
        let expectedResult = -60;
    
        let actualResult = sum(input);
    
        assert.equal(actualResult, expectedResult)
    });
})
