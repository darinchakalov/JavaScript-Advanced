function solve() {
    let create = {};
    create.fighter = (name) => {
        let hero = {
            name: name,
            health: 100,
            stamina: 100,
        };
        hero.fight = () => {
            console.log(`${hero.name} slashes at the foe!`);
            hero.stamina--
        }
        return hero;
    };
    create.mage = (name) => {
        let hero = {
            name: name,
            health: 100,
            mana: 100,
        };
        hero.cast = (spell) => {
            console.log(`${hero.name} cast ${spell}`);
            hero.mana--
        }
        return hero;
    };
    return create;
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
