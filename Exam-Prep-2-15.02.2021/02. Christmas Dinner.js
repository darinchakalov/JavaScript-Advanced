class ChristmasDinner {
	constructor(budget) {
		if (Number(budget) < 0) {
			throw new Error("The budget cannot be a negative number");
		}
		this.budget = Number(budget);
		this.dishes = [];
		this.products = [];
		this.guests = {};
	}
	shopping(product) {
		let type= product[0]
        let price = product[1]
		if (Number(price) > this.budget) {
			throw new Error("Not enough money to buy this product");
		} else {
			this.products.push(type);
			this.budget -= Number(price);
			return `You have successfully bought ${type}!`;
		}
	}
	recipes(recipe) {
		recipe.productsList.forEach((p) => {
			if (!this.products.includes(p)) {
				throw new Error(`We do not have this product`);
			}
		});
		this.dishes.push({
			recipeName: recipe.recipeName,
			productsList: recipe.productsList,
		});
		return `${recipe.recipeName} has been successfully cooked!`;
	}
	inviteGuests(name, dish) {
		if (!this.dishes.find((e) => e.recipeName === dish)) {
			throw new Error(`We do not have this dish`);
		}
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited')
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`

	}
	showAttendance() {
        let result = []

        for (const [guest, dish] of Object.entries(this.guests)) {
            let currentDish = this.dishes.find(d => d.recipeName === dish)
            result.push(`${guest} will eat ${dish}, which consists of ${currentDish.productsList.join(', ')}`)
        }
        return result.join('\n')
    }
}
let dinner = new ChristmasDinner(0);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
	recipeName: "Oshav",
	productsList: ["Fruits", "Honey"],
});
dinner.recipes({
	recipeName: "Folded cabbage leaves filled with rice",
	productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
	recipeName: "Peppers filled with beans",
	productsList: ["Beans", "Peppers", "Salt"],
});
dinner.inviteGuests("Petar1", "Oshav");
dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
