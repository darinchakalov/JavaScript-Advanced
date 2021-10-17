class Bank {
	constructor(bankName) {
		this._bankName = bankName;
		this.allCustomers = [];
	}
	newCustomer(customer) {
		let currentCustomer = this.allCustomers.find(
			(c) => c.firstName === customer.firstName && c.lastName === customer.lastName
		);
		console.log(currentCustomer);
		if (currentCustomer !== undefined) {
			throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
		} else {
			this.allCustomers.push(customer);
			return { firstName: customer.firstName, lastName: customer.lastName, personalId: customer.personalId };
		}
	}
	depositMoney(personalId, amount) {
		let currentCustomer = this.allCustomers.find((c) => c.personalId === personalId);
		if (currentCustomer === undefined) {
			throw new Error("We have no customer with this ID!");
		} else {
			if (!currentCustomer.hasOwnProperty("totalMoney")) {
				currentCustomer["totalMoney"] = Number(amount);
				currentCustomer["transactions"] = [];
				currentCustomer["transactions"].push({
					type: "deposit",
					amount: Number(amount),
				});
			} else {
				currentCustomer["totalMoney"] += Number(amount);
				currentCustomer["transactions"].push({
					type: "deposit",
					amount: Number(amount),
				});
			}
			return `${currentCustomer.totalMoney}$`;
		}
	}
	withdrawMoney(personalId, amount) {
		let currentCustomer = this.allCustomers.find((c) => c.personalId === personalId);
		if (currentCustomer === undefined) {
			throw new Error("We have no customer with this ID!");
		} else {
			if (Number(amount) > currentCustomer["totalMoney"]) {
				throw new Error(
					`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`
				);
			} else {
				currentCustomer["totalMoney"] -= Number(amount);
				currentCustomer["transactions"].push({
					type: "withdraw",
					amount: Number(amount),
				});
				return `${currentCustomer.totalMoney}$`;
			}
		}
	}
	customerInfo(personalId) {
		let currentCustomer = this.allCustomers.find((c) => c.personalId === personalId);
		let result = [];
		if (currentCustomer === undefined) {
			throw new Error("We have no customer with this ID!");
		} else {
			result.push(`Bank name: ${this._bankName}`);
			result.push(`Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}`);
			result.push(`Customer ID: ${currentCustomer.personalId}`);
			result.push(`Total Money: ${currentCustomer.totalMoney}$`);
			result.push(`Transactions:`);
			for (let i = currentCustomer["transactions"].length - 1; i >= 0; i--) {
				if (currentCustomer["transactions"][i].type === "deposit") {
					result.push(
						`${i + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${
							currentCustomer["transactions"][i].amount
						}$!`
					);
				} else {
					result.push(
						`${i + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${
							currentCustomer["transactions"][i].amount
						}$!`
					);
				}
			}
		}
		return result.join("\n");
	}
}
let name = "SoftUni Bank";
let bank = new Bank("SoftUni Bank");

bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 1111111 });
bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 1111111 });
//expect(sameCustomer).to.throw(Error, 'Svetlin Nakov is already our customer!');

// let bank = new Bank("SoftUni Bank");

// console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));
