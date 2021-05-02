// creating navbar
let navbar = createNavBar();
navbar.setTitle("Body");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

// changing the style of the webpage
setBackgroundColor("skyblue");
setFontColor("white");

// adding text
let text = addText("Just Text", "center");
// changing the position of the text
text.position = "left";
// updating the element
text.update();

let input = addInput("text", "hello, world", position="center");
// adding a custom element
addHTML(`<span style="text-align: center;">Hello, HTML</span>`)

// adding a header
addHeader("Hello, Header", "center", "1");
