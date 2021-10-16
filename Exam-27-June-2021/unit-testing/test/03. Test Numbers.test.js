const testNumbers = require("../03. Test Numbers");
const assert = require("chai").assert;

describe("Tests for the testNumbers", () => {
	describe("Testing the sumNumbers functionality", () => {
		it("two strings", () => {
			assert.isUndefined(testNumbers.sumNumbers("a", "b"));
		});
		it("1 and 2", () => {
			assert.equal(testNumbers.sumNumbers(1, 2), 3);
		});
		it("-1 and -2", () => {
			assert.equal(testNumbers.sumNumbers(-1, -2), -3);
		});
		it("-1 and 2", () => {
			assert.equal(testNumbers.sumNumbers(-1, 2), 1);
		});
		it("1.55 and 2", () => {
			assert.equal(testNumbers.sumNumbers(1.5, 2), 3.5);
		});
	});
	describe("Testing the numberChecker functionality", () => {
		it("odd", () => {
			assert.equal(testNumbers.numberChecker(2), "The number is even!");
		});
		it("even", () => {
			assert.equal(testNumbers.numberChecker(1), "The number is odd!");
		});
		it("NAN", () => {
			assert.throws(() => testNumbers.numberChecker("da"), "The input is not a number!");
		});
	});
	describe("Testing the averageSumArray functionality", () => {
		it("[1,2,3]", () => {
            let expected = 2
            assert.equal(testNumbers.averageSumArray([1,2,3]), expected)
        });
		it("[1]", () => {
            assert.equal(testNumbers.averageSumArray([1]), 1)
        });
	});
});

//it('', () => {

//})
