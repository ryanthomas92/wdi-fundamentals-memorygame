var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

cardOne == cardTwo;
cardThree == cardFour;

if(cardOne === cardTwo) {
	alert("You found a match!");
}
else if(cardOne === cardThree) {
	alert("Sorry, try again.");
}
else if(cardOne === cardFour) {
	alert("Sorry, try again.");
}