const numberOperations = require('../03. Number Operations')
const assert = require('chai').assert

describe('Testing the numberOperations', () => {
    describe('Testing the powNumber function', () => {
        it('Should return 100 when passed 10', () => {
            assert.equal(numberOperations.powNumber(10), 100)
        })
    })
    describe('Testing the numberChecker function', () => {
        it('Should throw an error if string is passed', () => {
            assert.throws(() => numberOperations.numberChecker('aa'), 'The input is not a number!')
        })
        it('Should throw an error if nothing is passed', () => {
            assert.throws(() => numberOperations.numberChecker(), 'The input is not a number!')
        })
        it('Should throw an error if null is passed', () => {
            assert.exists(numberOperations.numberChecker(null), 'The number is lower than 100!')
        })
        it('Should return "lower than 100" if input is 10', () => {
            assert.equal(numberOperations.numberChecker(10), 'The number is lower than 100!')
        })
        it('Should return "greater or equal to 100" if input is 100', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
        })
    })
    describe('Testing the sumArrays function', () => {
        it('Should return correct summed array', () => {
            assert.deepEqual(numberOperations.sumArrays([ 1, 2, 3 ], [ 1, 2, 3 ]), [2, 4, 6])
        })
        it('Should return correct summed array', () => {
            assert.deepEqual(numberOperations.sumArrays([ 1, 2, 3,4 ], [ 1, 2, 3 ]), [2, 4, 6,4])
        })
    })
})