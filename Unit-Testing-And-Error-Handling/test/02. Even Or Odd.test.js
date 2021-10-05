const isOddOrEven = require("../02. Even Or Odd");
const assert = require("chai").assert;

describe('Testing the isOddOrEven functionality', () => {
    it('Should return undefined if passed a number as an input', () => {       
        let actualResult = isOddOrEven(5)

        assert.isUndefined(actualResult)
    })
    it('Should return even if passed a string with even length', () => {       
        let expectedResult = 'even'

        let actualResult = isOddOrEven('mama')
        assert.equal(actualResult, expectedResult)
    })
    it('Should return odd if passed a string with odd length', () => {       
        let expectedResult = 'odd'

        let actualResult = isOddOrEven('darin')
        assert.equal(actualResult, expectedResult)
    })
})