// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Grid");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

setTitle("Grid - basicUI");

addNewLine();

let card1 = new Card("Card One", "This is the first card.", ["Link", "#"]);
card1.position = "center";
card1.add(false);
let card2 = new Card("Card Two", "This is the second card.", ["Link", "#"]);
card2.position = "center";
card2.add(false);
let card3 = new Card("Card Three", "This is the third card.", ["Link", "#"]);
card3.position = "center";
card3.add(false);
let card4 = new Card("Card Four", "This is the fourth card.", ["Link", "#"]);
card4.position = "center";
card4.add(false);
let card5 = new Card("Card Five", "This is the fifth card.", ["Link", "#"]);
card5.position = "center";
card5.add(false);
let card6 = new Card("Card Six", "This is the sixth card.", ["Link", "#"]);
card6.position = "center";
card6.add(false);

createGrid([[card1, card2, card3], [card4, card5, card6]]);
