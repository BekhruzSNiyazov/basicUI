// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Table");
navbar.addItem("home", "Home");
navbar.addItem("logo", ["../../images/logo.png", 175, 50]);

let table = createTable(["hello", "world"], [["goodbye", "world"], ["hello", "again"]], "center");
table.setStyle("width: 50vw;");
table.setStyle("text-align: center;");
