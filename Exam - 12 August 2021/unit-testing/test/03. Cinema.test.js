const cinema = require('../03. Cinema')
const assert = require('chai').assert

describe("Testing the cinema functionality", () => {
    describe("Testing the showMovies function", () => {
        it('Should show message if empty array is passed', ()=> {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        })
        it('Should return the array item separated by coma and space when full array is passed', () => {
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']), 'King Kong, The Tomorrow War, Joker')
        })
        it('Should return the array item separated by coma and space when full array is passed', () => {
            assert.equal(cinema.showMovies(['King Kong']), 'King Kong')
        })
        it('Should return the array item separated by coma and space when full array is passed', () => {
            assert.equal(cinema.showMovies([1,2,3]), '1, 2, 3')
        })
    })
    describe('Testing the ticketPrice functinality', () => {
        it('Should throw an error if projection type is not present in the object', () => {
            assert.throws(() => cinema.ticketPrice('Test'), 'Invalid projection type.')
        })
        it('Should throw an error if projection type is not present in the object', () => {
            assert.throws(() => cinema.ticketPrice(1), 'Invalid projection type.')
        })
        it('Should throw an error if projection type is not present in the object', () => {
            assert.throws(() => cinema.ticketPrice(undefined), 'Invalid projection type.')
        })
        it('Should throw an error if projection type is not present in the object', () => {
            assert.throws(() => cinema.ticketPrice(null), 'Invalid projection type.')
        })
        it('Should throw an error if projection type is not present in the object', () => {
            assert.throws(() => cinema.ticketPrice(), 'Invalid projection type.')
        })
        it('Should throw an error if projection type is not present in the object', () => {
            assert.throws(() => cinema.ticketPrice('NORMAL'), 'Invalid projection type.')
        })
        it('Should return the price when listed projection type is passed', () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12)
        })
        it('Should return the price when listed projection type is passed', () => {
            assert.equal(cinema.ticketPrice('Normal'), 7.5)
        })
        it('Should return the price when listed projection type is passed', () => {
            assert.equal(cinema.ticketPrice('Discount'), 5.5)
        })
    })
    describe('Testing the swapSeatsInHall functinality', () => {
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall('a', 'b'), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(1), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(1, 1), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(1, -1), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(-1, -1), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(111, 1), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(1, 2), 'Successful change of seats in the hall.')
        })
        it('Should return message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(20, 10), 'Successful change of seats in the hall.')
        })
        it('Should return message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(10, 20), 'Successful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(0, 2), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(2, 0), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(undefined), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(null), 'Unsuccessful change of seats in the hall.')
        })
        it('Should return error message if the passed numbers are not integers', () => {
            assert.equal(cinema.swapSeatsInHall(1.5, 2), 'Unsuccessful change of seats in the hall.')
        })
    })
})