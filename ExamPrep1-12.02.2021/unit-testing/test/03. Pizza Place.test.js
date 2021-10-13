let pizzUni = require('../03. Pizza Place')
let assert = require('chai').assert

describe("Testing the pizzUni variable", () => {
    describe('Testing the makeAnOrder functionality', () => {
        it('Should throw an error if orderedPizza is not present in the object', () => {
            let obj = {}
            assert.throws(() => pizzUni.makeAnOrder(obj),  'You must order at least 1 Pizza to finish the order.')
        })
        it('Should return correct answer when the object values are set', () => {
            let obj = {orderedPizza: 'Peperoni', orderedDrink: 'Cola'}
            assert.equal(pizzUni.makeAnOrder(obj), 'You just ordered Peperoni and Cola.')
        })
    })
    describe('Testing the getRemainingWork functionality', () => {
        it('Should return All orders are complete! if no orders with status different than ready', () => {
            let arr = [{pizzaName: 'Peperoni', status: 'ready'}]
            assert.equal(pizzUni.getRemainingWork(arr), 'All orders are complete!')
        })
        it('It should return array with orders with status preperaring', () => {
            let arr = [{pizzaName: 'Peperoni', status: 'ready'},{pizzaName: 'Test', status: 'preperaring'}]
            assert.equal(pizzUni.getRemainingWork(arr), `The following pizzas are still preparing: Test.`)
        })
    })
    describe('Testing the orderType functionality', () => {
        it('Should decrease the sum with 10% if the order type is Carry out', () => {
            assert.equal(pizzUni.orderType(20, 'Carry Out'), 18)
        })
        it('Should retrun the total sum if the order is Delivery', () => {
            assert.equal(pizzUni.orderType(20, 'Delivery'), 20)
        })
    })
})