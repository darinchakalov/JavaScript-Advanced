function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);

    function onClick() {
        let input = document.querySelector("#inputs textarea").value;
        let restourants = {};
        input = JSON.parse(input);
        for (const line of input) {
            let [name, empoyes] = line.split(" - ");
            empoyes = empoyes.split(", ");
            if (!restourants.hasOwnProperty(name)) {
                restourants[name] = {};
                restourants[name]["workers"] = empoyes;
            } else {
                restourants[name].workers.concat(empoyes);
            }
            restourants[name].avgSalary = () => {
                let sum = 0;
                for (const emp of restourants[name].workers) {
                    let [firtName, salary] = emp.split(" ");
                    sum += Number(salary);
                }
                return (sum / restourants[name].workers.length).toFixed(2);
            };
            restourants[name].bestSalary = () => {
                let biggest = 0;
                for (const emp of restourants[name].workers) {
                    let [firtName, salary] = emp.split(" ");
                    if (Number(salary) > biggest) {
                        biggest = Number(salary);
                    }
                }
                return biggest.toFixed(2);
            };
            restourants[name]["empObj"] = {};
            for (const worker of restourants[name].workers) {
                let [emp, salary] = worker.split(" ");
                restourants[name]["empObj"][emp] = Number(salary);
            }
            restourants[name].sortedEmp = Object.entries(restourants[name]["empObj"]).sort((a, b) => b[1] - a[1]);
        }
        let sorted = Object.entries(restourants).sort((a, b) => b[1].avgSalary() - a[1].avgSalary());
        let bestRestaurant = document.querySelector("#bestRestaurant p");
        bestRestaurant.textContent = `Name: ${
            sorted[0][0]
        } Average Salary: ${sorted[0][1].avgSalary()} Best Salary: ${sorted[0][1].bestSalary()}`;
        let bestWorkers = document.querySelector('#workers p')
        let workersResult = ''
        for (const worker of sorted[0][1].sortedEmp) {
           workersResult += `Name: ${worker[0]} With Salary: ${worker[1]} `
        }
        bestWorkers.textContent = workersResult
    }
}
