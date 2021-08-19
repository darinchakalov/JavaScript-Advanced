function solve(arr, first, second) {
    return arr.splice(arr.indexOf(first), arr.indexOf(second))
}
solve(
    ["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
    "Key Lime Pie",
    "Lemon Meringue Pie"
);
