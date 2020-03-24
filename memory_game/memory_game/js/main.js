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
	rank: "1",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
	},
	{
	rank: 1,
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
	},
	{
	rank: "2",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
	},
	{
	rank: 2,
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
	},
];

// Fisher-Yates Shuffle adaptation
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

shuffle(cards);

const cardsInPlay = [];

const score = document.getElementById("score");


function scoreBoard() {
	score.textContent++;
}


// function checkForMatch() {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("Pick a different card, fucker!");
// 	} else if (cardsInPlay[0] == cardsInPlay[1]) {
// 		alert("You found a match!");
// 		scoreBoard();
// 	} else {
// 		alert("Sorry, try again.");
// 	}
// }

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("Pick a different card!");
		cardsInPlay.pop(cardsInPlay[1]);
	} else if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You found a match!");
		scoreBoard();
	} else {
		alert("Sorry, try again.");
		// add some sort of .setAttribute line for FIRST TWO elements in cardsInPlay to show as "images/back.png" 
		cardsInPlay.pop(cardsInPlay[0]);
		cardsInPlay.pop(cardsInPlay[1]);
	}
}

function checkForDuplicate() {
	if ((cardsInPlay[2] === cardsInPlay[0]) || (cardsInPlay[2] === cardsInPlay[1])) {
		alert("Pick a different card!");
		cardsInPlay.pop(cardsInPlay[2]);
	}
}

function checkForMatch1() {
	if ((cardsInPlay[3] === cardsInPlay[0]) || (cardsInPlay[3] === cardsInPlay[1]) || (cardsInPlay[3] === cardsInPlay[2])) {
		alert("Pick a different card!");
		cardsInPlay.pop(cardsInPlay[3]);
	} else if (cardsInPlay[2] === cardsInPlay[3]) {
		alert("Pick a different card!");
		cardsInPlay.pop(cardsInPlay[3]);
	} else if (cardsInPlay[2] == cardsInPlay[3]) {
		alert("You found a match!");
		scoreBoard();
	} else {
		alert("Sorry, try again.");
		// add some sort of .setAttribute line for LAST TWO elements in cardsInPlay to show as "images/back.png" 
		cardsInPlay.pop(cardsInPlay[2]);
		cardsInPlay.pop(cardsInPlay[3]);
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} else if (cardsInPlay.length === 3) {
		checkForDuplicate();
	} else if (cardsInPlay.length === 4) {
		checkForMatch1();
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

var cardId = this.getAttribute('data-id');
this.setAttribute('src', "images/back.png");


