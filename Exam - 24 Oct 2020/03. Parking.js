class Parking{
    constructor ( capacity ) {
        this.capacity = Number(capacity)
        this.vehicles = []
    }
    addCar( carModel, carNumber ){
        if (this.capacity === this.vehicles.length) {
            throw new Error('Not enough parking space.')
        }
        let currentCar = {
            carModel: carModel,
            carNumber: carNumber, 
            payed: false
        }
        this.vehicles.push(currentCar)
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar( carNumber ){
        let currentCar = this.vehicles.find(c => c.carNumber === carNumber)
        if (!currentCar) {
            throw new Error('The car, you\'re looking for, is not found.')
        }
        if (currentCar.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        } else {
            let index = this.vehicles.indexOf(currentCar)
            this.vehicles.splice(index, 1)
            return `${carNumber} left the parking lot.`
        }
    }
    pay( carNumber ){
        let currentCar = this.vehicles.find(c => c.carNumber === carNumber)
        if (!currentCar) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (currentCar.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        currentCar.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber){
        if (carNumber) {
            let currentCar = this.vehicles.find(c => c.carNumber === carNumber)
            let isPayed = currentCar.payed === true ? 'Has payed' : 'Not payed'
            return `${currentCar.carModel} == ${currentCar.carNumber} - ${isPayed}`
        } else{
            let result = [`The Parking Lot has ${ this.capacity - this.vehicles.length } empty spots left.`]
            for (const [index, car] of Object.entries(this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel)))) {
                let isPayed = car.payed === true ? 'Has payed' : 'Not payed'
                result.push(`${car.carModel} == ${car.carNumber} - ${isPayed}`)
            }
            return result.join('\n')
        }
    }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
