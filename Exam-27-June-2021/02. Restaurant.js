class Restaurant {
    'use strict'
	constructor(budget) {
		this.budgetMoney = Number(budget);
		this.menu = {};
		this.stockProducts = {};
		this.history = [];
	}
	loadProducts(products) {
		products.forEach((product) => {
			let [productName, productQuantity, productTotalPrice] = product.split(" ");
			if (Number(productTotalPrice) <= this.budgetMoney) {
				if (!this.stockProducts.hasOwnProperty(productName)) {
					this.stockProducts[productName] = Number(productQuantity);
				} else {
					this.stockProducts[productName] += Number(productQuantity);
				}
				this.budgetMoney -= Number(productTotalPrice);
				this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
			} else {
				this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
			}
		});
		return this.history.join("\n");
	}
	addToMenu(meal, neededProduct, price) {
		if (!this.menu.hasOwnProperty(meal)) {
			this.menu[meal] = {};
			this.menu[meal]["products"] = [];
			neededProduct.forEach((prod) => {
				let [productName, productQuantity] = prod.split(" ");
				this.menu[meal]["products"].push({
					name: productName,
					quantity: Number(productQuantity),
				});
			});
			this.menu[meal]["price"] = Number(price);
			if (Object.keys(this.menu).length === 1) {
				return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
			} else if (Object.keys(this.menu).length === 0 || Object.keys(this.menu).length >= 2) {
				return `Great idea! Now with the ${meal} we have ${
					Object.keys(this.menu).length
				} meals in the menu, other ideas?`;
			}
		} else {
			return `The ${meal} is already in the our menu, try something different.`;
		}
	}
	showTheMenu() {
		let output = [];
		if (Object.keys(this.menu).length === 0) {
			return `Our menu is not ready yet, please come later...`;
		} else {
			for (const meal of Object.keys(this.menu)) {
				output.push(`${meal} - $ ${this.menu[meal]["price"]}`);
			}
			return output.join("\n");
		}
	}
	makeTheOrder(meal) {
		if (!this.menu.hasOwnProperty(meal)) {
			return `There is not ${meal} yet in our menu, do you want to order something else?`;
		} else {
			let hasAllProducts = true;
			for (const prod of this.menu[meal]["products"]) {
				if (
					!this.stockProducts.hasOwnProperty(prod.name) ||
					this.stockProducts[prod.name] < Number(prod.quantity)
				) {
					hasAllProducts = false;
				}
			}
			if (hasAllProducts) {
				for (const prod of this.menu[meal]["products"]) {
					this.stockProducts[prod.name] -= Number(prod.quantity);
				}
                this.budgetMoney += this.menu[meal]["price"]
				return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]["price"]}.`;
			} else {
				return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
			}
		}
	}
}

let kitchen = new Restaurant(1000);
console.log(
	kitchen.loadProducts([
		"Banana 10 5",
		"Banana 20 10",
		"Strawberries 50 30",
		"Yogurt 10 10",
		"Yogurt 500 1500",
		"Honey 5 50",
	])
);

// let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu("frozenYogurt", ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"], 9.99));
console.log(
	kitchen.addToMenu(
		"Pizza",
		["Flour 0.5", "Oil 0.2", "Yeast 0.5", "Salt 0.1", "Sugar 0.1", "Tomato sauce 0.5", "Pepperoni 1", "Cheese 1.5"],
		15.55
	)
);
console.log(kitchen.addToMenu("frozenYogurt"));

// let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
kitchen.loadProducts(["Yogurt 30 3", "Honey 50 4", "Strawberries 20 10", "Banana 5 1"]);
kitchen.addToMenu("frozenYogurt", ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10", "test 2"], 9.99);
console.log(kitchen.makeTheOrder("frozenYogurt"));
