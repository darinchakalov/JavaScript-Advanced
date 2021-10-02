const rgbToHexColor = require('../06. RGB to Hex')
let assert = require('chai').assert

describe('Testing the rgbToHexColor functionality', function(){
    it('Should pass when input in rgb limits', () => {
        let red = 252;
        let green =  186;
        let blue = 3;
        let expectedResult = '#FCBA03'

        let actualResult = rgbToHexColor(red, green, blue)

        assert.equal(actualResult, expectedResult)
    })
    it('Should not pass when input in rgb out of limits', () => {
        let red = 999;
        let green =  186;
        let blue = 3;
        let expectedResult = undefined

        let actualResult = rgbToHexColor(red, green, blue)

        assert.equal(actualResult, expectedResult)
    })
    it('Should not pass when input in rgb not correct type', () => {
        let red = null;
        let green =  186;
        let blue = 3;
        let expectedResult = undefined

        let actualResult = rgbToHexColor(red, green, blue)

        assert.equal(actualResult, expectedResult)
    })
    it('Should pass when input in rgb  0 0 0', () => {
        let red = 0;
        let green =  0;
        let blue = 0;
        let expectedResult = '#000000'

        let actualResult = rgbToHexColor(red, green, blue)

        assert.equal(actualResult, expectedResult)
    })
    it('Should pass when input in rgb  255 255 255', () => {
        let red = 255;
        let green =  255;
        let blue = 255;
        let expectedResult = '#FFFFFF'

        let actualResult = rgbToHexColor(red, green, blue)

        assert.equal(actualResult, expectedResult)
    })
    it('Should return undefined when empty input', () => {
        let expectedResult = undefined
        assert.equal(rgbToHexColor(), expectedResult)
    })
    it('Should return undefined when input of different types', () => {
        let expectedResult = undefined
        assert.equal(rgbToHexColor('1',2,4), expectedResult)
    })
    it('Should return undefined when input has value less than 0', () => {
        let expectedResult = undefined
        assert.equal(rgbToHexColor(0,-2,4), expectedResult)
    })
    it('Should return undefined when input has floating point', () => {
        let expectedResult = undefined
        assert.equal(rgbToHexColor(2.5,2,4), expectedResult)
    })
    it('Should return undefined when input has only two values', () => {
        let expectedResult = undefined
        assert.equal(rgbToHexColor(55,22), expectedResult)
    })
})