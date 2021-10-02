const createCalculator = require('../07. Add-Subtract')
const assert = require('chai').assert;

describe('Testing the createCalculator functionality', () => {
    let calc
    beforeEach(function(){
        calc = createCalculator()
    })
    it('Should return 1 when adding 2 and substracting 1', () => {
        calc.add(2)
        calc.subtract(1)
        let actualResult = calc.get()

        assert.equal(actualResult, 1)
    })
    it('Should return 0 when no input provided', () => {
        let actualResult = calc.get()
        assert.equal(actualResult, 0)
    })
    it('Should return NaN when anything different than number is provided', () => {
        calc.add('fail')
        let actualResult = calc.get()
        assert.isNaN(actualResult)
    })
})