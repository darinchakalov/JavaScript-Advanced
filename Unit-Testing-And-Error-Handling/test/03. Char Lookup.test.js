const lookupChar = require("../03. Char Lookup");
const assert = require("chai").assert;

describe("Testing the lookupChar functionality", () => {
    it(`Should return undefined if both inputs are of incorrect type`, () => {
        assert.isUndefined(lookupChar(undefined, null));
    });
    it(`Should return undefined if one of the inputs is of incorrect type`, () => {
        assert.isUndefined(lookupChar("test string", null));
    });
    it(`Should return undefined if the input types are reversed`, () => {
        assert.isUndefined(lookupChar(2, 'test string'));
    });
    it(`Should return undefined if the input types are numbers`, () => {
        assert.isUndefined(lookupChar(2, 2));
    });
    it(`Should return undefined if the index is a string`, () => {
        assert.isUndefined(lookupChar("test string", "2"));
    });
    it("Should return incorrect index if the input index is out of the range", () => {
        let expectedResult = "Incorrect index";
        assert.equal(lookupChar("test string", 44), expectedResult);
    });
    it("Should return incorrect index if the input index is a negative number", () => {
        let expectedResult = "Incorrect index";
        assert.equal(lookupChar("test string", -2), expectedResult);
    });
    it("Should return incorrect index if the input index is a floating point number", () => {
        assert.isUndefined(lookupChar("test string", 4.5));
    });
    it("Should return incorrect index if the sting is empty", () => {
        let expectedResult = "Incorrect index";
        assert.equal(lookupChar("", 0), expectedResult);
    });
    it('Should return "s" when the input is test string and index "2"', () => {
        let expectedResult = "s";
        assert.equal(lookupChar("test string", 2), expectedResult);
    });
});
