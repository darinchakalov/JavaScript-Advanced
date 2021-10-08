const PaymentPackage = require("../12. Payment Package");
const assert = require("chai").assert;
const expect = require("chai").expect;

describe("Testing the PaymentPackage functionality", () => {
    describe("Testing the name", () => {
        it("Should return error if name is not a sting", () => {
            assert.throws(() => new PaymentPackage(1, 1), "Name must be a non-empty string");
        });
        it("Should throw error when name is an empty string", () => {
            assert.throws(() => new PaymentPackage("", 2), "Name must be a non-empty string");
        });
        //Test correct values
        it("Name should equal Test when that is passed", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal(newTestObj.name, "Test");
        });
        it("Name should equal newTest when that is set", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal((newTestObj.name = "newTest"), "newTest");
        });
    });
    describe("Testing the value", () => {
        it("Should throw error if value is not a number", () => {
            assert.throws(() => new PaymentPackage("Test", "1"), "Value must be a non-negative number");
        });
        it("Should throw error if value is a negative number", () => {
            // expect(() => new PaymentPackage('Test',-1)).to.throw('Value must be a non-negative number')
            assert.throws(() => new PaymentPackage("Test", -1), "Value must be a non-negative number");
        });
        //Test correct values
        it("Value should equal 1 when that is passed", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal(newTestObj.value, 1);
        });
        it("Value should equal 2 when that is set", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal((newTestObj.value = 2), 2);
        });
    });
    describe("Testing the VAT", () => {
        it("Should throw error if VAT is not a number", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.throws(() => (newTestObj.VAT = "20"), "VAT must be a non-negative number");
        });
        it("Should throw error if VAT is a negative number", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.throws(() => (newTestObj.VAT = -20), "VAT must be a non-negative number");
        });
        //Test correct values
        it("Should return 20 when VAT is required", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal(newTestObj.VAT, 20);
        });
        it("Should return 25 when VAT is set to 25", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal(newTestObj.VAT = 25, 25);
        });
    });
    describe("Testing the active", () => {
        it("Should return true when active is required", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal(newTestObj.active, true)
        });
        it("Should return faslse when active is set to false", () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.equal(newTestObj.active = false, false)
        });
        it('Should throw an error if active is not boolean', () => {
            let newTestObj = new PaymentPackage("Test", 1);
            assert.throw(() => newTestObj.active = 'true', 'Active status must be a boolean')
        })
    });
    describe("Testing the toString() functionality", () => {
        it('Should return correct output', () =>{
            let newTestObj = new PaymentPackage("Test", 2);
            assert.equal(newTestObj.toString(), 'Package: Test\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4')
        })
        it('Should return correct output (changed active)', () =>{
            let newTestObj = new PaymentPackage("Test", 2);
            newTestObj.active = false;
            assert.equal(newTestObj.toString(), 'Package: Test (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4')
        })
        it('Should return correct output', () =>{
            let newTestObj = new PaymentPackage("Test", 0);
            newTestObj.VAT = 0
            assert.equal(newTestObj.toString(), 'Package: Test\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0')
        })
        it('Should return correct output (changed active)', () =>{
            let newTestObj = new PaymentPackage("Test", 2);
            newTestObj.VAT = 0
            assert.equal(newTestObj.toString(), 'Package: Test\n- Value (excl. VAT): 2\n- Value (VAT 0%): 2')
        })
    })
});
