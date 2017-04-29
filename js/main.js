var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("It's a match! You drink!");
	}	else {
		alert ("No match. Make someone drink!");
	} 
	}};

var flipCard = function(cardId) {
	console.log ("You flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};
 
flipCard(0);
flipCard(2);



/*
	var cardOne = cards[0]
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);
	var cardTwo = cards[2]
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);
	if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("It's a match! Drink!")
	}
	else {
		alert("No match. Opponent drinks!")
	}
*/
