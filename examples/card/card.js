// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Table");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

// adding a line break
addNewLine();

let text = "Hello World. This is a test card."

// creating a card
let card = createCard("Title", text,["Find out more", "#"]);
// centering the card
card.position = "center";
// adding a subtitle
card.subtitle = "Subtitle"
card.update();

// setting the title of the webpage
setTitle("Card - basicUI");
