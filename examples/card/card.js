// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Card");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

// adding a line break
addNewLine();

// creating a card
let card = createCard("Title","Hello World. This is a test card.", ["Find out more", "#", "link"]);
// centering the card
card.position = "center";
// adding a subtitle
card.subtitle = "Subtitle"
card.update();

addNewLine();

let card2 = createCard("Card with an image", "This is a card with an image", ["Find out more", "#", "button"]);
// centering the card
card2.position = "center";
// adding an image
card2.image = "../../images/logo.png";
card2.update();

// setting the title of the webpage
setTitle("Card - basicUI");
