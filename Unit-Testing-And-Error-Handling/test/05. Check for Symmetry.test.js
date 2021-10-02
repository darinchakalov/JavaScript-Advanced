const isSymmetric = require("../05. Check for Symmetry");
const assert = require("chai").assert;

describe("Test isSymmetric functionality", () => {
    it("Should return false when passed non symetrical array of numbers", () => {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });
    it("Should return true when passed non symetrical array of numbers", () => {
        let input = [1, 2, 3, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });
    it("Should return false when passed input different than array", () => {
        let input = "test";
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });
    it("Should return true when passed input array of strings", () => {
        let input = ["a", "b", "c", "b", "a"];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });
    it("Should return false when passed array of different types", () => {
        let input = [1, '1'];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });
});
