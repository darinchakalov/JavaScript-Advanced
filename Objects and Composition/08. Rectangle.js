function rectangle(w, h, color) {
    color = color.split('')
    color[0] = color[0].toUpperCase()
    color = color.join('')
    let rect = {
        width: w,
        height: h,
        color: color
    }
    rect.calcArea = () => {
        return w * h
    }
    return rect;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
