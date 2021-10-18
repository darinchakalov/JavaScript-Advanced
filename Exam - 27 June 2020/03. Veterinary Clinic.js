class VeterinaryClinic {
	constructor(clinicName, capacity) {
		this.clinicName = clinicName;
		this.capacity = capacity;
		this.clients = [];
		this.pets = 0;
		this.totalProfit = 0;
		this.currentWorkload = 0;
	}
	newCustomer(ownerName, petName, kind, procedures) {
		if (this.pets === this.capacity) {
			throw new Error("Sorry, we are not able to accept more patients!");
		}
		let currentClient = this.clients.find((c) => c.ownerName === ownerName);
		if (!currentClient) {
			currentClient = {
				ownerName: ownerName,
				pets: [],
			};
			this.clients.push(currentClient);
		}
		let currentPet = currentClient.pets.find((p) => p.name === petName);
		if (!currentPet || currentPet.procedures.length === 0) {
			if (!currentPet) {
				currentPet = {
					name: petName,
					kind: kind.toLowerCase(),
					owner: ownerName,
					procedures: [],
				};
				currentClient.pets.push(currentPet);
			}
			currentPet.procedures = procedures;
			this.pets++;
			this.currentWorkload = (this.pets / this.capacity) * 100;
			return `Welcome ${petName}!`;
		} else {
			throw new Error(
				`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(
					", "
				)}.`
			);
		}
	}
	onLeaving(ownerName, petName) {
		let currentClient = this.clients.find((c) => c.ownerName === ownerName);
		if (!currentClient) {
			throw new Error("Sorry, there is no such client!");
		}
		let currentPet = currentClient.pets.find((p) => p.name === petName);
		if (!currentPet || currentPet.procedures.length === 0) {
			throw new Error(`Sorry, there are no procedures for ${petName}!`);
		}
        this.totalProfit += (currentPet.procedures.length * 500)
        this.pets --
        this.currentWorkload = (this.pets / this.capacity) * 100;
        currentPet.procedures = []
        return `Goodbye ${ petName }. Stay safe!`
	}
    toString(){
        let result = []
        result.push(`${this.clinicName} is ${this.currentWorkload}% busy today!`)
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`)
        for (const [k,v] of Object.entries(this.clients.sort((a,b) => a.ownerName.localeCompare(b.ownerName)))) {
            result.push(`${v.ownerName} with:`)
            for (const pet of v.pets.sort((a,b) => a.name.localeCompare(b.name))) {
                result.push(`---${pet.name} - a ${pet.kind} that needs: ${pet.procedures.join(', ')}`)
            }
        }
        return result.join('\n')
    }
}
let clinic = new VeterinaryClinic("SoftCare", 10);
console.log(clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"]));
console.log(clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"]));
console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));
console.log(clinic.onLeaving("Jim Jones", "Tiny"));
//console.log(clinic.toString());
clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);
console.log(clinic.toString());
