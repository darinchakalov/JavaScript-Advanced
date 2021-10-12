(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.sum = function() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.reduce(reducer)
    }
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})();
