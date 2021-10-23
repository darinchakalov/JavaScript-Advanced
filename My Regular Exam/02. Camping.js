class SummerCamp {
	constructor(organizer, location) {
		this.organizer = organizer;
		this.location = location;
		this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
		this.listOfParticipants = [];
	}
	registerParticipant(name, condition, money) {
		let current = this.listOfParticipants.find((p) => p.name === name);
		if (!this.priceForTheCamp.hasOwnProperty(condition)) {
			throw new Error("Unsuccessful registration at the camp.");
		}
		if (current) {
			return `The ${name} is already registered at the camp.`;
		}
		if (Number(money) < this.priceForTheCamp[condition]) {
			return `The money is not enough to pay the stay at the camp.`;
		} else {
			current = {
				name: name,
				condition: condition,
				power: 100,
				wins: 0,
			};
			this.listOfParticipants.push(current);
			return `The ${name} was successfully registered.`;
		}
	}
	unregisterParticipant(name) {
		let current = this.listOfParticipants.find((p) => p.name === name);
		if (!current) {
			throw new Error(`The ${name} is not registered in the camp.`);
		}
		let index = this.listOfParticipants.indexOf(current);
		this.listOfParticipants.splice(index, 1);
		return `The ${name} removed successfully.`;
	}
	timeToPlay(typeOfGame, participant1, participant2) {
		let user1 = this.listOfParticipants.find((p) => p.name === participant1);
		let user2 = this.listOfParticipants.find((p) => p.name === participant2);
		if (typeOfGame === `Battleship`) {
			if (!user1) {
				throw new Error(`Invalid entered name/s.`);
			}
			user1.power += 20;
			return `The ${user1.name} successfully completed the game ${typeOfGame}.`;
		} else {
			if (!user1 || !user2) {
				throw new Error(`Invalid entered name/s.`);
			}
			if (user1.condition !== user2.condition) {
				throw new Error(`Choose players with equal condition.`);
			}
			if (user1.power > user2.power) {
				user1.wins++;
				return `The ${user1.name} is winner in the game ${typeOfGame}.`;
			} else if (user1.power < user2.power) {
				user2.wins++;
				return `The ${user2.name} is winner in the game ${typeOfGame}.`;
			} else {
				return `There is no winner.`;
			}
		}
	}
	toString() {
		let result = [
			`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
		];
		for (const [i, player] of Object.entries(this.listOfParticipants.sort((a, b) => b.wins - a.wins))) {
			result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
		}
		return result.join("\n");
	}
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
