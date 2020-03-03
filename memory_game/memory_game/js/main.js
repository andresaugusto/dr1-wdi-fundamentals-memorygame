console.log("Finally! Up and running!");

// let cardOne = "queen";
// let cardTwo = "king";
// let cardThree = "king";
// let cardFour = "queen";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You found a match!");
	 } else {
		 alert("Sorry, try again.");
	}
}