var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("JS file is connected to HTML! Woo!")

// if (cardOne === cardTwo || cardFour === cardFour) {
// 	alert ("You found a match!");
// } else {
// 	alert ("Sorry try again.")
// }
function createBoard(numCards) {
	var gameBoard = document.getElementById('game-board');

	for (i = 0; i < numCards; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}

createBoard(4);