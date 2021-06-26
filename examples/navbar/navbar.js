// creating a navbar and setting the background color of the navbar
// let navbar = createNavbar(); for a light navbar
let navbar = createNavBar("dark", "#32a852");
// changing the color of the navbar
navbar.setBackgroundColor("#37474a");
// setting the title on the navbar
navbar.setTitle("Navbar Example");
// setting the logo on the navbar
navbar.addItem("logo", "../../images/logo.png");
// creating a link for home page
navbar.addItem("home", "Home");
// creating a link for another page
navbar.addItem("link", ["Another page", "/hello"]);
// text on the right side of the navbar
navbar.addItem("text", "Just text", "right");
// as you can see here, navbar.addItem returns the added element and you can easily change its styling
let input = navbar.addItem("input", ["text", "Placeholder"], "right");
input.style.marginRight = "1vw";
// adding a button
navbar.addItem("button", ["primary", "Button", "alert(`hello, world`)"], "right");
// adding a dropdown menu
navbar.addItem("dropdown", ["Dropdown", [["hello", "/hello"], ["world", "/world"]]]);
// setting the title of the webpage
setTitle("Navbar - basicUI");
