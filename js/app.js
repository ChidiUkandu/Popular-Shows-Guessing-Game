console.log("Guess Who");

const theOffice = ["Jim", "Pam", "Michael", "Oscar", "Kelly"];
const randomCharacter = theOffice[Math.random() * theOffice.length)]
let answer = randomCharacter;
let guess = ;
let gameScore = 0;
let gameRound = 0;

//1. create this array of 6 characters
const characters = [{
	name: "Michael",
	imgLink: "www.asdfasdlfkjasdlfkjhasdfj.jpg",
	clues: ["", "", ""]
}, {

}, {

}]



const game = {
	character: null,

	// 2. write this function
	showCharacters: function() {
		// loop
			// add to HTML
	}

	// 3. write this function
	getRandomCharacter: function() {
		// pick a char from array

		// store in character property above
	}

}

// for (let i = 0; i < 50; i++) {
// 	guess = prompt("What's your guess?");
// 	if (answer === guess) {
// 		alert("Correct!");
// 		// gameScore = ;
// 	}else {
// 		alert("Wrong!");
// 	} 
// }
	

function drawScore() {
	text("Score: " + gameScore)
	alert(gameScore);

}

// each character is an object
// name, picture link, a bunch of clues


