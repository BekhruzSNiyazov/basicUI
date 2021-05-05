// creating navbar
let navbar = createNavBar();
navbar.setTitle("Body");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

// changing the style of the webpage
setBackgroundColor("skyblue");
setColor("white");

// adding text
let text = addText("Just Text", "center");
// adding a class to the text element
text.classes = "testClass";
text.update();

// adding an input field
let input = addInput("text", "hello, world");
addNewLine();

// adding a button
let button = addButton("hello", "primary", "center");
button.onclick = toggleTheme;
button.update();

addNewLine();

// changing the position of the input
input.position = "center";
// changing the color of the input text
input.color = "green";
// changing the placeholder of the input
input.placeholder = "new placeholder";
// updating the input field so that changes will make effect
input.update();

// adding a custom element
addHTML(`<span style="text-align: center;">Hello, HTML</span>`)

// adding a header
addHeader("Hello, Header", 6, "center");

// setting the title of the webpage
setTitle("Body - basicUI")
