let StringBuilder = require("../13. String Builder");
let assert = require("chai").assert;
let expect = require('chai').expect;

describe("Testing the StringBuilder functionality", () => {
    it("Testing the test case provided in the example", () => {
        let str = new StringBuilder("hello");
        str.append(", there");
        str.prepend("User, ");
        str.insertAt("woop", 5);

        assert.equal(str.toString(), "User,woop hello, there");
    });
    it("Testing the test case provided in the example", () => {
        let str = new StringBuilder("hello");
        str.append(", there");
        str.prepend("User, ");
        str.insertAt("woop", 5);
        str.remove(6, 3);
        assert.equal(str.toString(), "User,w hello, there");
    });
    it("Should throw an error if non string is provided for append", () => {
        let str = new StringBuilder("hello");
        assert.throws(() => str.append(1), 'Argument must be a string');
    });
    it("Should throw an error if non string is provided for prepend", () => {
        let str = new StringBuilder("hello");
        assert.throws(() => str.prepend(1), 'Argument must be a string');
    });
    it("Should throw an error if non string is provided for insertAt", () => {
        let str = new StringBuilder("hello");
        assert.throws(() => str.insertAt(1, 1), 'Argument must be a string');
    });
    it("Should throw an error if undefined is provided", () => {
        assert.throws(() => new StringBuilder(null), 'Argument must be a string');
    });
});
