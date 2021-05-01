let navbar = createNavBar("dark");
navbar.changeTitle("basicUI");
navbar.addItem("home", "Home");
navbar.addItem("link", ["Just an another page", "/hello"]);
navbar.addItem("link", ["right", "/right"], "right");

changeTitle("hello world");
