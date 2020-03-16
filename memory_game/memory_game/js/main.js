console.log("Finally! Up and running!");

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
	cardImage: "images/queen-of-hearts.png",
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
	},
];


const cardsInPlay = [];

const score = document.getElementById("score");


function scoreBoard() {
	score.textContent++;
}


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		scoreBoard();
	} else {
		alert("Sorry, try again.");
	}
}


function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	if (cardsInPlay.length === 4) {
		checkForMatch();
	}
} 


function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		// newListItem.innerHTML = "cardElement";
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		
		document.getElementById("game-board").appendChild(cardElement);
	}
}


createBoard();




