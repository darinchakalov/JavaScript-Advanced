const library = require("../03. Library");
const assert = require("chai").assert;

describe("Testing the library object", () => {
	describe("Testing the calcPriceOfBookc functionality", () => {
		it("Error if name is not a string", () => {
			assert.throws(() => library.calcPriceOfBook(12, 1999), `Invalid input`);
		});
		it("Error if year is not a number", () => {
			assert.throws(() => library.calcPriceOfBook("Test", "Test"), `Invalid input`);
		});
		it("Error if year is not a number", () => {
			assert.throws(() => library.calcPriceOfBook(), `Invalid input`);
		});
		it("50% decuction of price if year is 1980 or less", () => {
			assert.equal(library.calcPriceOfBook("TestBook", 1980), `Price of TestBook is 10.00`);
		});
		it("Normal price if year is 1980 or newer", () => {
			assert.equal(library.calcPriceOfBook("TestBook", 1981), `Price of TestBook is 20.00`);
		});
	});
	describe("Testing the findBook functionality", () => {
		it("Throw an error if array is empty", () => {
			assert.throws(() => library.findBook([], "TestBook"), `No books currently available`);
		});

		it("If book present in the array", () => {
			assert.equal(library.findBook(["TestBook", "Pipi", "Emil"], "Pipi"), `We found the book you want.`);
		});
		it("If book is not present in the array", () => {
			assert.equal(
				library.findBook(["TestBook", "Pipi", "Emil"], ""),
				`The book you are looking for is not here!`
			);
		});
		it("If book is not present in the array", () => {
			assert.equal(
				library.findBook(["TestBook", "Pipi", "Emil"], "Pipi Dulgoto Chorapche"),
				`The book you are looking for is not here!`
			);
		});
        it("If book is not present in the array", () => {
			assert.equal(
				library.findBook(["TestBook", "Pipi", "Emil"], null),
				`The book you are looking for is not here!`
			);
		});
        it("If book is not present in the array", () => {
			assert.equal(
				library.findBook(["TestBook", "Pipi", "Emil"], undefined),
				`The book you are looking for is not here!`
			);
		});
	});
	describe("Testing the arrangeTheBooks functionality", () => {
		it("Throw an error if countBooks is not a number", () => {
			assert.throws(() => library.arrangeTheBooks("test"), `Invalid input`);
		});
		it("Throw an error if countBooks is a negative number", () => {
			assert.throws(() => library.arrangeTheBooks(-12), `Invalid input`);
		});
		it("If countBooks <= 40", () => {
			assert.equal(library.arrangeTheBooks(35), `Great job, the books are arranged.`);
		});
        it("If countBooks <= 40", () => {
			assert.equal(library.arrangeTheBooks(40), `Great job, the books are arranged.`);
		});
		it("If countBooks > 40", () => {
			assert.equal(library.arrangeTheBooks(41), `Insufficient space, more shelves need to be purchased.`);
		});
	});
});
