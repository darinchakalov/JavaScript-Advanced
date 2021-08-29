function colorize() {
    let table = document.querySelectorAll("table tr");
    let arr = Array.from(table);
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i].style.background = "teal";
        }
    }
}
