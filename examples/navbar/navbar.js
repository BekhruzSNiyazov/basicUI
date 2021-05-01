// let navbar = createNavbar(); for a light navbar
let navbar = createNavBar("dark");
// setting the title on the navbar
navbar.setTitle("Navbar Example");
// setting the logo on the navbar
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);
// creating a link for home page
navbar.addItem("home", "Home");
// creating a link for another page
navbar.addItem("link", ["Another page", "/hello"]);
// text on the right side of the navbar
navbar.addItem("text", "Just text", "right");
// adding an input field
navbar.addItem("input", ["text", "Placeholder"], "right");
// adding a button
navbar.addItem("button", ["primary", "Button"], "right");
// adding a dropdown menu
navbar.addItem("dropdown", ["Dropdown", ["hello", "world"]]);
// setting the title of the webpage
setTitle("basicUI");
