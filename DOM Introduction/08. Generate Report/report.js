function generateReport() {
    let tableHeadings = document.querySelectorAll("table>thead>tr>th>input");
    let tableRows = document.querySelectorAll("tbody>tr");
    let output = [];
    for (let i = 0; i < tableRows.length; i++) {
        let obj = {};
        let values = Array.from(tableRows[i].getElementsByTagName("td")).map((el) => el.textContent);
        for (let j = 0; j < tableHeadings.length; j++) {
            if (tableHeadings[j].checked) {
                obj[tableHeadings[j].name] = values[j]
            }
        }
        output.push(obj)
    }
    document.getElementById('output').textContent = JSON.stringify(output, null, 2)
}
