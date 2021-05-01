let navbar = createNavBar("dark");
navbar.changeTitle("basicUI");
navbar.addItem("icon", ["../../images/logo.png", 175, 50]);
navbar.addItem("home", "Home");
navbar.addItem("link", ["Just an another page", "/hello"]);
navbar.addItem("link", ["Item on the right side", "/right"], "right");
navbar.addItem("text", "Just text", "right");
navbar.addItem("link", ["Hello test", "/test"], "right");

setTitle("basicUI");
