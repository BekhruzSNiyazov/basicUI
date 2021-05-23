setTitle("Alerts - basicUI");

// creating the navbar
let navbar = createNavBar();
navbar.setTitle("Alerts");
navbar.addItem("home", "Home");
navbar.addItem("logo", "../../images/logo.png");

addNewLine();

createAlertField();

addAlert("A primary alert", "primary");
addAlert("A secondary alert", "secondary");
addAlert("A success alert", "success");
addAlert("A danger alert", "danger");
addAlert("A warning alert", "warning");
addAlert("An info alert", "info");
addAlert("A light alert", "light");
addAlert("A dark alert", "dark");
