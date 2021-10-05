const mathEnforcer = require("../04. Math Enforcer");
const assert = require("chai").assert;

describe("Testing the mathEnforcer functionality", () => {
    describe("addFive", () => {
        it("Should return 10 when using the addFive function with input 5", () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
        it("Should return 3 when using the addFive function with input -2", () => {
            assert.equal(mathEnforcer.addFive(-2), 3);
        });
        it("Should return 26.8 when using the addFive function with input 21.8", () => {
            assert.closeTo(mathEnforcer.addFive(21.8), 26.8, 0.01);
        });
        it("Should return undefined when passed a string", () => {
            assert.isUndefined(mathEnforcer.addFive("5"));
        });
        it("Should return undefined when passed an empty input", () => {
            assert.isUndefined(mathEnforcer.addFive());
        });
    });
    describe("subtractTen", () => {
        it("Should return 10 when using the subtractTen function with input 20", () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
        });
        it("Should return undefined when passed a string", () => {
            assert.isUndefined(mathEnforcer.subtractTen("5"));
        });
        it("Should return -20 when passed -10", () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });
        it("Should return 21.3 when passed 31.3", () => {
            assert.closeTo(mathEnforcer.subtractTen(31.3), 21.3, 0.01);
        });
        it("Should return undefined when passed an empty input", () => {
            assert.isUndefined(mathEnforcer.subtractTen());
        });
    });
    describe("sum", () => {
        it("Should return 8 when using the sum function with inputs 5 and 3", () => {
            assert.equal(mathEnforcer.sum(5, 3), 8);
        });
        it("Should return 8 when using the sum function with inputs 10 and -2", () => {
            assert.equal(mathEnforcer.sum(10, -2), 8);
        });
        it("Should return -18 when using the sum function with inputs -10 and -8", () => {
            assert.equal(mathEnforcer.sum(-10, -8), -18);
        });
        it("Should return 2.8 when using the sum function with inputs 1.2 and 1.6", () => {
            assert.closeTo(mathEnforcer.sum(1.2,1.6), 2.8, 0.01)
        });
        it("Should return 2.8 when using the sum function with inputs 1 and 1.8", () => {
            assert.closeTo(mathEnforcer.sum(1,1.8), 2.8, 0.01)
        });
        it("Should return undefined when passed a string", () => {
            assert.isUndefined(mathEnforcer.sum("5", 5));
        });
        it("Should return undefined when passed two strings", () => {
            assert.isUndefined(mathEnforcer.sum("5", "5"));
        });
        it("Should return undefined when passed an empty input", () => {
            assert.isUndefined(mathEnforcer.sum(5));
        });
        it("Should return undefined when passed an empty input", () => {
            assert.isUndefined(mathEnforcer.sum());
        });
    });
});
