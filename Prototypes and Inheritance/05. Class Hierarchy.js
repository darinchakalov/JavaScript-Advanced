function solve() {
    class Figure {
        constructor(units = "cm") {
            this.units = units;
        }
        //get area() {}

        changeUnits(newUnit) {
            this.units = newUnit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get radius() {
            let radius = this._radius;
            switch (this.units) {
                case "m":
                    radius = radius / 10;
                    break;
                case "cm":
                    break;
                case "mm":
                    radius = radius * 10;
                    break;
                default:
                    break;
            }
            return radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            return this.width * this.height;
        }

        get width() {
            let width = this._width;
            switch (this.units) {
                case "m":
                    width = width / 10;
                    break;
                case "cm":
                    break;
                case "mm":
                    width = width * 10;
                    break;
                default:
                    break;
            }
            return width;
        }

        get height() {
            let height = this._height;
            switch (this.units) {
                case "m":
                    height = height / 10;
                    break;
                case "cm":
                    break;
                case "mm":
                    height = height * 10;
                    break;
                default:
                    break;
            }
            return height;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}
let classes = solve();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;
let c = new Circle(5);

let r = new Rectangle(3, 4, 'mm');
console.log(r.toString());
c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString());
