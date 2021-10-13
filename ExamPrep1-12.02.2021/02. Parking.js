class Parking{
    constructor(capacity){
        this.capacity = capacity
        this.vehicles = []
    }
    addCar(carModel, carNumber){
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.')
        }
        this.vehicles.push({
            carModel: carModel,
            carNumber: carNumber,
            payed: false,
        })
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber){
        let currentVehicle = this.vehicles.find(e => e.carNumber === carNumber)
        if (currentVehicle === undefined) {
            throw new Error(`The car, you're looking for, is not found.`)
        }
        if (currentVehicle.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].carNumber === carNumber) {
                this.vehicles.splice(i, 1)
            }
        }
        return `${carNumber} left the parking lot.`
    }
    pay(carNumber){
        let currentVehicle = this.vehicles.find(e => e.carNumber === carNumber)
        if (currentVehicle === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (currentVehicle.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        currentVehicle.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber){
        if (arguments.length === 0) {
            let result =[ `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`]
            this.vehicles.forEach(vehicle => {
                let isPayed = vehicle.payed === true ? 'Has payed' : 'Not payed'
                result.push(`${vehicle.carModel} == ${vehicle.carNumber} - ${isPayed}`) 
            });
            return result.join('\n')
        } else {
            let currentVehicle = this.vehicles.find(e => e.carNumber === carNumber)
            let isPayed = currentVehicle.payed === true ? 'Has payed' : 'Not payed'
            return `${currentVehicle.carModel} == ${currentVehicle.carNumber} - ${isPayed}`
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
