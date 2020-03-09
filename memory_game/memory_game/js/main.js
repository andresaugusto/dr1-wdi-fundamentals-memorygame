// console.log("Finally! Up and running!");

// let cardOne = "queen";
// let cardTwo = "king";
// let cardThree = "king";
// let cardFour = "queen";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

// const cards = ["queen", "queen", "king", "king"];
// const cardsInPlay = [];

	// let cardOne = cards[0];
	// cardsInPlay.push('cardOne');
	// console.log("User flipped " + cardOne);

	// let cardTwo = cards[2];
	// cardsInPlay.push('cardTwo');
	// console.log("User flipped " + cardTwo);

	// if (cardsInPlay.length === 2) {
		// if (cardOne === cardTwo) {
			// alert("You found a match!");
		 // } else {
			 // alert("Sorry, try again.");
		// }
	// }

const cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId]);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);




