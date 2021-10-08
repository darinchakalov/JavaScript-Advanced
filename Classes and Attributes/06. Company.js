class Company {
    constructor() {
        this.departments = {};
        this.salaryData = {};
    }
    addEmployee(username, salary, position, department) {
        if (!username || !position || !department || !salary || salary < 0) {
            throw new Error("Invalid input!");
        }
        let newUser = {
            userame: username,
            salary: salary,
            postion: position,
        };

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.salaryData[department] = {
                employeeCount: 0,
                totalSalary: 0,
                averageSalary: 0,
            };
        }
        this.departments[department].push(newUser);

        /// INSERT SALARY DATA
        this.salaryData[department].employeeCount++;
        this.salaryData[department].totalSalary += Number(salary);
        this.salaryData[department].averageSalary =
            this.salaryData[department].totalSalary / this.salaryData[department].employeeCount;

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
    bestDepartment() {
        let bestDepartment = Object.entries(this.salaryData).sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];
        let result = "";
        result += `Best Department is: ${bestDepartment[0]}\n`;
        result += `Average salary: ${bestDepartment[1].averageSalary.toFixed(2)}\n`;
        this.departments[bestDepartment[0]].sort((a, b) => b.salary - a.salary || a.userame.localeCompare(b.userame));
        for (const emp of this.departments[bestDepartment[0]].sort((a, b) => b.salary - a.salary)) {
            result += `${emp.userame} ${emp.salary} ${emp.postion}\n`;
        }
        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
