class Vacationer {
	constructor(fullName, creditCard) {
		this.fullName = {
			firstName: fullName[0],
			middleName: fullName[1],
			lastName: fullName[2],
		};
		this.idNumber = "";
		if (creditCard) {
            this.creditCard = {
                cardNumber: creditCard[0],
				expirationDate: creditCard[1],
				securityNumber: creditCard[2],
            }
		} else {
			this.creditCard = {
				cardNumber: 1111,
				expirationDate: "",
				securityNumber: 111,
			};
		}
		this.wishlist = [];
	}
    get fullName(){
        return this.fullName
    }
    set fullName(){
        let pattern = /^[A-Z][a-z]+$/
        if (fullName.lenght !== 3) {
            throw new Error('Name must include first name, middle name and last name')
        }
        if (fullName.forEach(element => {
            
        })) {
            
        }

    }
}

let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
	let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
	console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
	let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
	vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
	console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList("Spain");
vacationer1.addDestinationToWishList("Germany");
vacationer1.addDestinationToWishList("Bali");

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
