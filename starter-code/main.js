var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


// ------ Old Code Start -----------
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
// console.log("JS file is connected to HTML! Woo!")

// if (cardOne === cardTwo || cardFour === cardFour) {
// 	alert ("You found a match!");
// } else {
// 	alert ("Sorry try again.")
// }
// ------ Old Code End -------------


function createBoard() {
	var gameBoard = document.getElementById('game-board');

	for (i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		gameBoard.appendChild(newCard);

	}
}

function isMatch () {
	if (cardsInPlay[0] === "queen" && cardsInPlay[1] === "queen" || cardsInPlay[0] === "king" && cardsInPlay[1] === "king") {
		alert ("You found a match!");
	} else {
		alert ("Sorry try again");
	}
	for (i = 0; i < cardsInPlay.length; i++) {
		cardsInPlay[i].innerHTML = '';
	}

}

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log("clicked a card");
	console.log(this.getAttribute('data-card'));

	// if (this.getAttribute('data-card') === "queen") {
	// 	this.innerHTML = "<img src="queen.png" alt="Queen Card"/>";
	// } else {
	// 	this.innerHTML = "<img src="king.png" alt="King Card"/>";
	// }

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

createBoard(4);