function solveClasses() {
	class Developer {
		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.baseSalary = 1000;
			this.tasks = [];
			this.experience = 0;
		}
		addTask(id, taskName, priority) {
			let current = {
				id: id,
				taskName: taskName,
				priority: priority,
			};

			if (priority === "high") {
				this.tasks.unshift(current);
			} else {
				this.tasks.push(current);
			}
            return `Task id ${id}, with ${priority} priority, has been added.`
		}
        doTask(){
            this.tasks.shift()
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
        }
        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
        reviewTasks(){
            let result = [`Tasks, that need to be completed:`]
            this.tasks.forEach(task => {
                result.push(`${task.id}: ${task.taskName} - ${task.priority}`)
            });
            return result.join('\n')
        }
	}
    class Junior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName, lastName)
            this.baseSalary = 1000 + Number(bonus)
            this.tasks = []
            this.experience = Number(experience)
        }
        learn( years ){
            this.experience += Number(years)
        }
    }
    class Senior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName, lastName)
            this.baseSalary = 1000 + Number(bonus)
            this.tasks = []
            this.experience = Number(experience) + 5
        }
        changeTaskPriority(taskId){
            let currentTask = this.tasks.find(t => t.id = Number(taskId))
            let index = this.tasks.indexOf(currentTask)
            if (currentTask.priority === 'high') {
                this.tasks.push(this.tasks.splice(index, 1))
                currentTask.priority = 'low'
            } else {
                this.tasks.unshift(this.tasks.splice(index, 1))
                currentTask.priority = 'high'
            }
            return currentTask
        }
    }

	return {
		Developer,
		Junior,
		Senior,
	};
}
const classes = solveClasses()
const senior = new classes.Senior("Jonathan", "Joestar", 200, 2);
senior.addTask(1, "Write Performance Tests", "high");


const checkTaskPResult = senior.tasks[0]["priority"]
console.log(checkTaskPResult);
const checkTaskPExpect = "high";
// expect(checkTaskPResult).to.be.eq(checkTaskPExpect);

const yearsResult = senior.experience;
const yearsExpect = 7;
console.log(yearsExpect);
// expect(yearsResult).to.be.eq(yearsExpect);
