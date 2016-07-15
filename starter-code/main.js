var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var resetButton = document.querySelector('button');
var scoreCounter = 0;
var resetCards = document.getElementsByClassName("flipped");

createBoard();

resetButton.addEventListener('click', resetBoard);

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
	if (cardsInPlay[0].getAttribute('data-card') === "queen" && cardsInPlay[1].getAttribute('data-card') === "queen" || 
		cardsInPlay[0].getAttribute('data-card') === "king" && cardsInPlay[1].getAttribute('data-card') === "king") {
		scoreCounter = scoreCounter + 1;
		document.getElementById('scoreValue').innerHTML = scoreCounter;
		alert ("You found a match!");
	} else {
		alert ("Sorry try again");
		for (i = 0; i < cardsInPlay.length; i++) {
			cardsInPlay[i].innerHTML = ' ';
			cardsInPlay[i].className = 'card';
		}
	}

}

function isTwoCards () {
	if (this.className === 'flipped') {
	// if (this === cardsInPlay[0]) {
		return;
	}
	cardsInPlay.push(this);
	this.className = "flipped";
	// console.log("clicked a card");
	// console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === "queen") {
		this.innerHTML = "<img src='queen.png' alt='Queen Card'/>";
	} else if (this.getAttribute('data-card') === "king") {
		this.innerHTML = "<img src='king.png' alt='King Card'/>";
	} else {
		alert("put more images in here you nerd");
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

function resetBoard() {
	for (i = 0; i < resetCards.length; i++) {
		resetCards[i].innerHTML = ' ';
		resetCards[i].className = 'card';
	}

	resetCards = [];
	cardsInPlay = [];
}


