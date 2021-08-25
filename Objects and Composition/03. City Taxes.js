function solve(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() {
            this.treasury = this.treasury + this.population * this.taxRate;
            return treasury;
        },
        applyGrowth: function applyGrowth(percentage) {
            this.population = this.population + (this.population * percentage) / 100;
            return population;
        },
        applyRecession: function applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury - (this.treasury * percentage) / 100);
            return treasury;
        },
    };
    return city;
}
solve("Tortuga", 7000, 15000);
