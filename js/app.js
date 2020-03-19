console.log("Guess Who");

//const theOffice = ["Jim", "Pam", "Michael", "Oscar", "Kelly"];
//const randomCharacter = theOffice[Math.random() * theOffice.length)]
//let answer = randomCharacter;
//let guess = ;
//let gameScore = 0;
//let gameRound = 0;

//1. create this array of 6 characters
const characters = [{
	name: "Michael",
	imgLink: "https://www.collegemagazine.com/wp-content/uploads/2018/04/Michael-Scott.png",
	clues: [" You miss 100 percent of the shots you don't take'", " You know what? I'm gonna start dating her even harder","If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice"]
}, {
	name: "Pam",
	imgLink: "https://i.pinimg.com/originals/f2/1d/ba/f21dbab3929c43a610d276ec88d72009.jpg",
	clues: ["When you're a kid you assume your parents are soulmates. My kids are gonna be right about that.", "engaged two times in 5 years", "Stop dating my Mother!"]

}, {
	name: "Kelly",
	imgLink: "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/05/Mindy-Kaling-as-Kelly-Kapoor-on-The-Office-Social-Media-Image.jpg",
	clues: ["I talk a lot, so I've learned to just tune myself out.", "Yeah, I have a lot of questions. Number one: how dare you!","My birthday was two months ago. There was not party."]
}, {
	name: "Oscar",
	imgLink: "https://66.media.tumblr.com/82da3047db06c8445cdf78bf2ace281c/tumblr_os8gdjNLQp1wsl8auo1_r1_540.gifv",
	clues: ["Saddle shoes with denim? I will literally call child protective servies","Because today we are all kings. And queens.","There is a hardwood floor underneath this carpeting. Why would they do that?"]
}, {
	name: "Dwight",
	imgLink: "https://pbs.twimg.com/profile_images/1129097651268530182/mIyrGPVD_400x400.jpg",
	clues: ["Nothing stresses me out. Except having to seek the approval of my inferiors","Welcome to the Hotel Hell. Check-in time is now. Check-out time is never","Last week, I gave a fire safety talk. And nobody paid any attention."]
}, {
	name: "Toby",
	imgLink: "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/07/Toby-in-The-Office-2.jpg",
	clues: ["works in HR", "secret crush on Pam","Why are you here? I didn't even invite you to my birthday party. I work here"]
}]



const game = {
	character: characters[i],

	// 2. write this function
	showCharacters: function() {
		for(let i = 0; i < characters.length; i++) {
			randomChar = characters[ Math.floor( Math.random() * characters.length) ) ]
			return game.charBuilder(randomChar);
			charBuilder: () => {
				let elementName = document.createElement('')
				elementName.classList.add('')
			}
			
		}
		  // loop
			// add to HTML





	},

	// 3. write this function
	getRandomCharacter: function() {
		for(let i in characters) {
		let randomIndex = characters[Math.floor(Math.random() * characters.length)];
		character.push(characters[randomIndex]);

		}
		// pick a char from array

		// store in character property above
	}

}

	
// each character is an object
// name, picture link, a bunch of clues


