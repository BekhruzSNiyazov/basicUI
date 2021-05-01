// let navbar = createNavbar(); for a light navbar
let navbar = createNavBar("dark");
// setting the title on the navbar
navbar.setTitle("Navbar Example");
// setting the logo on the navbar
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);
// creating a link for home page
navbar.addItem("home", "Home");
// creating a link for another page
navbar.addItem("link", ["Just an another page", "/hello"]);
// creating a link on the right side of the navbar
navbar.addItem("link", ["Item on the right side", "/right"], "right");
// text on the right side of the navbar
navbar.addItem("text", "Just text", "right");
// setting the title of the webpage
setTitle("basicUI");
