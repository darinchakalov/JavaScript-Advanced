function solve(input) {
    input.shift();
    result = [];
    for (const line of input) {
        let [town, latitude, longitude] = line.split(" | ");
        town = town.substring(2, town.length);
        longitude = longitude.substring(0, longitude.length - 2);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let townObj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        }
        result.push(townObj)
    }
    console.log(JSON.stringify(result));
}
solve(["| Town | Latitude | Longitude |", "| Sofia | 42.696552 | 23.32601 |", "| Beijing | 39.913818 | 116.363625 |"]);
