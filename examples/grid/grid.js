// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Grid");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

setTitle("Grid - basicUI");

// creating cards
let card1 = new Card("Card One", "This is the first card.", ["Link", "#"]);
let card2 = new Card("Card Two", "This is the second card.", ["Link", "#"]);
let card3 = new Card("Card Three", "This is the third card.", ["Link", "#"]);
let card4 = new Card("Card Four", "This is the fourth card.", ["Link", "#"]);
let card5 = new Card("Card Five", "This is the fifth card.", ["Link", "#"]);
let card6 = new Card("Card Six", "This is the sixth card.", ["Link", "#"]);

let cards = [card1, card2, card3, card4, card5, card6];
cards.forEach((card, index) => {
	card.position = "center";
	card.add(false);
});

// creating a grid
createGrid([[card1, card2, card3], [card4, card5, card6]]);
