const dealership = require('../03. Dealership')
const assert = require('chai').assert

describe('Testing the dealership object', () => {
    describe('Testing the newCarCost functionality', () => {
        it('has old car', () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 20000), 5000)
        })
        it('doesnt have old car', () => {
            assert.equal(dealership.newCarCost('Audi A4', 20000), 20000)
        })
        it('empty string', () => {
            assert.equal(dealership.newCarCost('', 20000), 20000)
        })
    })
    describe('Testing the carEquipment functionality', () => {
        it('return extras', () => {
            assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0,1,2]), ['heated seats', 'sliding roof', 'sport rims'])
        })
    })
    describe('Testing the euroCategory functionality', () => {
        it('categorey bigger than 4', () => {
            assert.equal(dealership.euroCategory(4), 'We have added 5% discount to the final price: 14250.')
        })
        it('category less than 4', () => {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!')
        })
    })
})

