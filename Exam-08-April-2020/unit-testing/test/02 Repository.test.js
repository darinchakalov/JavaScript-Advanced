const Repository = require("../02-Repository");
const assert = require("chai").assert;

describe("Tests for the Repositoty class", () => {
	let instance = {};

	beforeEach(
		() =>
			(instance = new Repository({
				name: "string",
				age: "number",
				birthday: "object",
			}))
	);
	describe("Count getter", () => {
		it("Return 0 when no entities are added", () => {
            assert.equal(instance.count, 0)
        });
	});
	describe("Testing the add function", () => {
        it("Return 0 when first entity is added", () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.equal(instance.add(entity), 0)
        });
        it("Should throw an error if a prop is missing", () => {
            let entity = {
                name: "Pesho",
                age: 22,
            };
            assert.throws(() => instance.add(entity), `Property ${'birthday'} is missing from the entity!`)
        });
        it("Should throw an error if a prop is icorrect type", () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: 2
            };
            //If missing tests try to change the string from the word file 
            assert.throws(() => instance.add(entity), `Property ${'birthday'} is not of correct type!`)
        });
        it("Should throw an error if a prop is icorrect type", () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: 2
            };
            //If missing tests try to change the string from the word file 
            assert.throws(() => instance.add(entity), `Property ${'birthday'} is of incorrect type!`)
        });
    });
	describe("Testing the getId", () => {
        it("When no entity is added", () => {
            
            assert.throws(() => instance.getId(2), `Entity with id: ${2} does not exist!`)
        });
        // it("Returns the entity with the given ID", () => {
        //     let entity = {
        //         name: "Pesho",
        //         age: 22,
        //         birthday: new Date(1998, 0, 7)
        //     };
        //     instance.add(entity)
        //     assert.equal(instance.getId(0), {name: 'Pesho', age: 22, birthday: ['Date: 1998-01-06T22:00:00.000Z']})
        // });
    });
	describe("Testing the update function", () => {
        it("Should throw an error if ID does not exist", () => {
            assert.throws(() => instance.update(2, '{}'), `Entity with id: ${2} does not exist!`)
        })
        it("Should throw an error if a prop is missing", () => {
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity = {
                name: "Pesho",
                age: 22,
            };
            instance.add(entity1)
            assert.throws(() => instance.update(0, entity), `Property ${'birthday'} is missing from the entity!`)
        });
        it("Should throw an error if a prop is icorrect type", () => {
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: 2
            };
            instance.add(entity1)
            assert.throws(() => instance.update(0, entity), `Property ${'birthday'} is not of correct type!`)
        });
        it("Should throw an error if a prop is icorrect type", () => {
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: 2
            };
            instance.add(entity1)
            assert.throws(() => instance.update(0, entity), `Property ${'birthday'} is of incorrect type!`)
        });
    });
	describe("Testing the del function", () => {
        it("Should throw an error if ID does not exist", () => {
            assert.throws(() => instance.del(2), `Entity with id: ${2} does not exist!`)
        })
        it('Should delete the index properly', () => {
            instance.add({ name: '', age: 1, birthday: {} })
			instance.add({ name: '', age: 1, birthday: {} })
			instance.del(1)
            assert.isFalse(instance.data.has(1))
        })
    });
});
