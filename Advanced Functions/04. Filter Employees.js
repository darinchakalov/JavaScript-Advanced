function solve(empoyes, criteria) {
    let empArr = JSON.parse(empoyes)
    let [filter, value] = criteria.split('-')
    
    let result = empArr.filter(emp => {
        return emp[filter] === value
    })
    let current = 0
    for (const emp of result) {
        console.log(`${current}. ${emp['first_name']} ${emp['last_name']} - ${emp['email']}`);
        current++
    }
}

solve(
    `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    "gender-Female"
);
