// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Theme Toggler");
navbar.addItem("home", "Home");

navbar.addItem("logo", "../../images/logo.png");

setTitle("Theme Toggler - basicUI");

addNewLine();

addHeading("Hello", 6, "center");
addText("world", "center");

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
});

// creating a grid
createGrid([[card1, card2, card3], [card4, card5, card6]]);

addNewLine();

let button = addButton("Toggle Theme", "primary", "center");
button.onclick = toggleTheme;
button.update();
