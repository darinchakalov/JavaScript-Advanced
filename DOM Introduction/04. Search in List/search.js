function search() {
    let searchString = document.getElementById("searchText").value;
    let list = document.querySelectorAll("#towns li");
    let matches = 0;
    for (let town of list) {
        if (town.textContent.includes(searchString)) {
            town.style.textDecoration = "underline";
            town.style.fontWeight = "bold";
            matches++;
        }
    }
    document.getElementById("result").textContent = `${matches} matches found`;
}
