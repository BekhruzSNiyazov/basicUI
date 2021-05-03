// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Table");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

// adding a line break
addNewLine();

// creating a card
createCard("Test", "Hello World. This is a test card. The result should be pretty cool.",
	["Find out more", "#"], image = "../../images/logo.png", position = "center");

// setting the title of the webpage
setTitle("Card - basicUI");
