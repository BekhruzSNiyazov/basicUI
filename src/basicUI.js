// Font Awesome
let fontawesomeLink = document.createElement("link");
fontawesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
fontawesomeLink.rel = "stylesheet";

// Google Fonts
let googleFontsLink = document.createElement("link");
googleFontsLink.href = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
googleFontsLink.rel = "stylesheet";

// Material Design Bootstrap
let mdb = document.createElement("link");
mdb.href = "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css";
mdb.rel = "stylesheet";

// adding to the head of the document
document.head.appendChild(fontawesomeLink);
document.head.appendChild(googleFontsLink);
document.head.appendChild(mdb);

// MDB JS
let mdbJS = document.createElement("script");
mdbJS.type = "text/javascript";
mdbJS.src = "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js";
document.body.appendChild(mdbJS);

// increasing the font size of each element
let style = document.createElement("style");
style.innerHTML = `
*:not(h1, h2, h3, h4, h5, h6, button, .btn) {
	font-size: 1.2rem !important;
}

.short-input {
	width: 20vw;
}

.alert {
	font-size: 1rem !important;
	margin-left: 1vw;
	margin-right: 1vw;
	display: flex;
	justify-content: space-between !important;
	align-items: center !important;
}

button {
	font-size: 1rem !important;
}
`;
document.head.appendChild(style);

let body = document.body;
body.className = "bg-white";

// the font color
let fontColor;

// the background color;
let backgroundColor;

// the counting variables
let textCount = 0;
let headerCount = 0;
let inputCount = 0;
let buttonCount = 0;
let tableCount = 0;
let cardCount = 0;
let gridCount = 0;
let alertCount = 0;

// current theme
let light = true;

// list of all elements
let elements = [];

// the dark background color
let darkBackgroundColor = "#0f0f0f";

// navbar
let navbarObject;

// this function sets classes to the element by the theme
function manageTheme(element, theme, background = true) {
	if (theme === "light") {
		if (!fontColor) {
			if (element.className.includes("text-light"))
				element.className = element.className.replace("text-light", "text-dark");
			else
				element.className += " text-dark";
		}
		if (background) {
			if (element.className.includes("bg-dark"))
				element.className = element.className.replace("bg-dark", "bg-light");
			else
				element.className += " bg-light";
		}
	} else if (theme === "dark") {
		if (!fontColor) {
			if (element.className.includes("text-dark"))
				element.className = element.className.replace("text-dark", "text-light");
			else
				element.className += "text-light";
		}
		if (background) {
			if (element.className.includes("bg-light"))
				element.className = element.className.replace("bg-light", "bg-dark");
			else
				element.className += " bg-dark";
		}
	} else throw `Theme can only be "light" or "dark"`;
}

// this function adjusts the size of the image
function adjustSize(image, width) {
	image.onload = () => {
		let w = image.width;
		let h = image.height;
		let aspectRatio = w / h;
		image.style.width = width + "px";
		image.style.height = (width / w * h) + "px";
	}
}

class basicUIObject {
	hiddenId;
	element;

	constructor() {
		this.classes = "";
		this.id = "";
		this.style = "";
		this.removed = true;
		this.added = false;
	}

	// this function removes element from the body
	remove() {
		this.outerElement.style.display = "none";
		this.removed = true;
	}

	// this function updates the element
	update() {
		this.remove();
		this.add(false);
		if (this.style) this.element.style.cssText = this.style;
		this.updated = true;
	}

	// this function sets the style to the element
	setStyle(style) {
		if (this.element) {
			this.element.style.cssText += style;
			this.style += style;
		} else {
			throw "Add element with .add method first";
		}
	}

	// this function wraps the element
	wrap() {
		let wrapper;
		if (!this.wrapper) {
			wrapper = document.createElement("span");
			wrapper.id = this.hiddenId;
			this.wrapper = wrapper;
		} else {
			wrapper = this.wrapper;
		}
		elements = [...elements, this];
		return wrapper;
	}

	// this function aligns the given element
	alignContent(element, position) {
		element.style.display = "flex";
		if (position === "left") {
			element.style.justifyContent = "flex-start";
		} else if (position === "right") {
			element.style.justifyContent = "flex-end"
		} else if (position === "center") {
			element.style.justifyContent = "center";
		} else {
			throw `Position should be "left" or "right" or "center"`;
		}
		this.outerElement = element;
	}

	add() {
	}
}

class NavBar extends basicUIObject {
	constructor(theme = "light", backgroundColor = "") {
		super();
		this.theme = theme;
		this.backgroundColor = backgroundColor;
		this.src = `<div class="container-fluid">
                        <a class="navbar-brand" id="navbar-image" href="#" style="padding-top: 0;"></a>
                        <a class="navbar-brand" id="navbar-title" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="items-list"></ul>
                            <div class="d-flex navbar-nav" id="items-list-right"></div>
                        </div>
                    </div>`;
		this.items = [];
		this.type = "sticky-top";
		this.hiddenId = "nav";
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	// this function adds the navbar to the body
	add(visible = true) {
		if (!this.added) {
			this.wrapper = this.wrap();
			this.element = document.createElement("nav");
			if (visible) body.appendChild(this.wrapper);
			this.added = true;
		}
		this.element.className = `navbar navbar-expand-lg navbar-${this.theme} bg-${this.theme} ${this.type}`;
		this.element.innerHTML = this.src;
		if (this.backgroundColor !== "") {
			this.element.style.setProperty("background-color", this.backgroundColor, "important");
		}
		this.wrapper.appendChild(this.element);
		this.outerElement = this.element;
		navbarObject = this;
		this.outerElement.style.display = "block";
	}

	// this function sets the background color of the navbar
	setBackgroundColor(color) {
		this.element.style.setProperty("background-color", color, "important");
		this.backgroundColor = color;
	}

	// this function changes the title of the navbar
	setTitle(title = "Navbar", href = "#") {
		let navTitle = document.getElementById("navbar-title");
		if (href !== "#") {
			navTitle.href = href;
		}
		navTitle.innerText = title;
		this.title = [title, href];
	}

	// this function adds an item to the navbar
	addItem(role, properties, position = "left", classes = "", id = "") {
		this.items = [...this.items, [role, properties, position, classes, id]];
		let list, li;
		if (position === "left") {
			list = document.getElementById("items-list");
			li = document.createElement("li");
			li.className = "nav-item";
		} else if (position === "right") {
			list = document.getElementById("items-list-right");
			li = document.createElement("span");
		} else {
			throw "Position should be \"left\" or \"right\"";
		}
		if (role === "home") {
			li.innerHTML = `<a class="nav-link active ${classes}" id="${id}" aria-current="page" href="/">${properties}</a>`
		} else if (role === "logo") {
			let navImage = document.getElementById("navbar-image");
			navImage.innerHTML = `<img src="${properties}" class="${classes}" id="${id}" alt="Navbar Image"
				width="100" class="d-inline-block align-text-top">` + navImage.innerHTML;
		} else if (role === "link") {
			li.innerHTML = `<a class="nav-link ${classes}" id="${id}" href="${properties[1]}">${properties[0]}</a>`;
		} else if (role === "text") {
			li.innerHTML = `<span class="nav-link ${classes}" id="${id}">${properties}</span>`;
		} else if (role === "input") {
			li.innerHTML = `<input type="${properties[0]}" placeholder="${properties[1]}" class="form-control ${classes}" id="${id}">`;
		} else if (role === "button") {
			li.innerHTML = `<button type="button" class="btn btn-${properties[0]} ${classes}" id="${id}">${properties[1]}</button>`
		} else if (role === "dropdown") {
			li.className = "nav-item dropdown";
			let a = document.createElement("a");
			a.className = "nav-link dropdown-toggle";
			a.href = "#";
			a.id = "navbarDropdown";
			a.role = "button";
			a.innerText = properties[0];
			a.setAttribute("data-bs-toggle", "dropdown");
			li.appendChild(a);
			let ul = document.createElement("ul");
			ul.className = "dropdown-menu";
			li.appendChild(ul);
			properties[1].forEach((text, index) => {
				let element = document.createElement("a");
				element.className = "dropdown-item";
				element.href = text[1];
				element.innerText = text[0];
				let listItemElement = document.createElement("li");
				listItemElement.appendChild(element);
				ul.appendChild(listItemElement);
			});
		} else {
			throw `Role "${role}" is not recognized`;
		}
		list.appendChild(li);
		return li;
	}
}

class Text extends basicUIObject {
	constructor(text, position = "left") {
		super();
		this.text = text;
		this.position = position;
		this.color = "";
		this.theme = "light";
		this.hiddenId = "text-" + textCount++;
		let positions = [" left", " right", " center"];
		if (!positions.includes(" " + position)) {
			throw `Position ${position} is not recognized. Here is a list of available positions:${positions}`;
		}
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	// this function adds text to the body
	add(visible = true) {
		if (!this.added) {
			this.wrapper = this.wrap();
			this.element = document.createElement("div");
			this.wrapper.appendChild(this.element);
			if (visible) body.appendChild(this.wrapper);
			this.added = true;
		} else {
			this.outerElement.style.display = "block";
			this.removed = false;
		}
		manageTheme(this.element, this.theme, false);
		this.element.className += " " + this.classes;
		this.element.id = this.id;
		this.element.innerText = this.text;
		this.outerElement = this.element;
		this.setStyle(this.style + `color: ${this.color} !important; text-align: ${this.position} !important;`);
	}
}

class Heading extends basicUIObject {
	constructor(text, size, position) {
		super();
		this.text = text;
		this.size = size;
		this.position = position;
		this.theme = "light";
		this.hiddenId = "header-" + headerCount++;
		let positions = [" left", " right", " center"];
		if (!positions.includes(" " + position)) {
			throw `Position ${position} is not recognized. Here is a list of available positions:${positions}`;
		}
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	// this function adds the header
	add(visible = true) {
		if (!this.added) {
			this.wrapper = this.wrap();
			let htmlHeader = "h" + (7 - this.size);
			this.element = document.createElement(htmlHeader);
			this.wrapper.appendChild(this.element);
			if (visible) body.appendChild(this.wrapper);
			this.added = true;
		} else {
			this.outerElement.style.display = "block";
			this.removed = false;
		}
		manageTheme(this.element, this.theme, false);
		this.element.className += " " + this.classes;
		this.element.id = this.id;
		this.element.innerText = this.text;
		this.outerElement = this.element;
		this.setStyle(this.style + `text-align: ${this.position} !important;`);
	}
}

class Input extends basicUIObject {
	constructor(type, placeholder) {
		super();
		this.type = type;
		this.placeholder = placeholder;
		this.value = "";
		this.position = "left";
		this.theme = "light";
		this.hiddenId = "input-" + inputCount++;
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	// this function adds input to the body
	add(visible = true) {
		let createOuter = false;
		if (!this.added) {
			this.wrapper = this.wrap();
			this.element = document.createElement("input");
			this.outerElement = document.createElement("div");
			this.outerElement.id = this.hiddenId + "Outer";
			if (visible) body.appendChild(this.wrapper);
			createOuter = true;
			this.added = true;
		} else {
			this.outerElement.style.display = "block";
			this.removed = false;
		}

		this.outerElement.className = "form-outline" + (!this.width ? " short-input " : "");
		if (this.position === "center")
			this.outerElement.style.margin = "auto";
		else if (this.position === "right") {
			this.outerElement.style.marginRight = "0";
			this.outerElement.style.marginLeft = "auto";
		}

		this.element.className = "form-control " + this.classes;
		this.element.id = this.id + " " + this.hiddenId + "forLabel for"
			+ this.type[0].toUpperCase() + this.type.slice(1);
		this.element.type = this.type;
		this.element.value = this.value;
		if (!this.width) {
			this.element.className += " short-input";
		} else {
			this.element.style.width = this.width;
		}

		this.label = document.createElement("label");
		this.label.className = "form-label";
		this.label.htmlFor = this.hiddenId + "forLabel";
		this.label.innerHTML = this.placeholder;

		if (createOuter) {
			this.outerElement.appendChild(this.element);
			this.outerElement.appendChild(this.label);
			this.wrapper.appendChild(this.outerElement);
		}

		manageTheme(this.outerElement, this.theme);
		manageTheme(this.element, this.theme);
		if (this.theme === "light") {
			this.outerElement.removeChild(this.outerElement.getElementsByTagName("label")[0]);
			this.label.className += " text-dark";
			this.outerElement.appendChild(this.label);
		} else {
			this.outerElement.removeChild(this.outerElement.getElementsByTagName("label")[0]);
			this.label.className += " text-light";
			this.outerElement.appendChild(this.label);
		}

		this.setStyle(this.style);
	}
}

class Button extends basicUIObject {
	constructor(text, type, position = "left") {
		super();
		this.text = text;
		this.type = type;
		this.position = position;
		this.theme = "light";
		this.onclick = null;
		this.hiddenId = "button-" + buttonCount++;
		let types = [" primary", " secondary", " success", " danger", " warning", " info", " light", " dark"];
		if (!types.includes(" " + type) && type !== "") {
			throw `The type ${type} was not recognized. Here is the list of available types:${types}`;
		}
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	// this function adds the button to the body
	add(visible = true) {
		if (!this.added) {
			this.wrapper = this.wrap();
			this.outerElement = document.createElement("span");
			this.element = document.createElement("button");
			this.outerElement.appendChild(this.element);
			this.wrapper.appendChild(this.outerElement);
			if (visible) body.appendChild(this.wrapper);
			this.added = true;
		} else {
			this.outerElement.style.display = "block";
			this.removed = false;
		}
		this.alignContent(this.outerElement, this.position);
		this.element.className = "btn" + this.classes;
		if (!this.type) {
			manageTheme(this.element, this.theme);
		} else {
			this.element.className += " btn-" + this.type;
		}
		this.element.id = this.id;
		this.element.innerHTML = this.text;
		this.element.onclick = this.onclick;
		this.setStyle(this.style);
	}
}

class Table extends basicUIObject {
	constructor(firstRow, rows, position = "left") {
		super();
		this.firstRow = firstRow;
		this.rows = rows;
		this.position = position;
		this.theme = "light";
		this.hiddenId = "table-" + tableCount++;
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	// this function adds table to the body
	add(visible = true) {
		if (!this.added) {
			this.wrapper = this.wrap();
			this.outerElement = document.createElement("span");
			this.element = document.createElement("table");
			this.thead = document.createElement("thead");
			this.trHead = document.createElement("tr");
			this.tbody = document.createElement("tbody");
			this.element.appendChild(this.thead);
			this.element.appendChild(this.tbody);
			this.outerElement.appendChild(this.element);
			this.wrapper.appendChild(this.outerElement);
			if (visible) body.appendChild(this.wrapper);
			this.added = true;
		} else {
			this.element.removeChild(this.tbody);
			this.tbody = document.createElement("tbody");
			this.element.appendChild(this.tbody);
			this.outerElement.style.display = "block";
			this.removed = true;
		}
		this.alignContent(this.outerElement, this.position);
		this.element.className = "table " + this.classes;
		manageTheme(this.element, this.theme, false);
		this.element.id = this.id;
		this.trHead.innerHTML = "";
		this.firstRow.forEach((element) => {
			let th = document.createElement("th");
			th.scope = "col";
			th.innerText = element;
			this.trHead.appendChild(th);
		});
		this.thead.appendChild(this.trHead);
		this.rows.forEach((row) => {
			let tr = document.createElement("tr");
			row.forEach((element) => {
				let td = document.createElement("td");
				td.innerText = element;
				tr.appendChild(td);
			});
			this.tbody.appendChild(tr);
		});
		this.setStyle(this.style);
	}
}

class Card extends basicUIObject {
	constructor(title, text, link, image = "", position = "left") {
		super();
		this.title = title;
		this.subtitle = "";
		this.text = text;
		this.link = link;
		this.image = image;
		this.position = position;
		this.theme = "light";
		this.hiddenId = "card-" + cardCount++;
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	add(visible = true) {
		if (!this.added) {
			this.wrapper = this.wrap();
			this.outerElement = document.createElement("span");
			this.element = document.createElement("div");
			if (this.image !== "") {
				if (this.imageElement) this.element.removeChild(this.imageElement)
				this.imageElement = document.createElement("img");
				this.imageElement.src = this.image;
				this.imageElement.class = "card-img-top";
				this.imageElement.alt = "Card Image";
				this.element.appendChild(this.imageElement);
			}
			this.body = document.createElement("div");
			this.body.className = "card-body";
			this.titleElement = document.createElement("h5");
			this.titleElement.className = "card-title";
			this.body.appendChild(this.titleElement);
			if (this.subtitle) {
				this.subtitleElement = document.createElement("h6");
				this.subtitleElement.className = "card-subtitle mb-2 text-muted";
				this.body.appendChild(this.subtitleElement);
			}
			this.p = document.createElement("p");
			this.p.className = "card-text";
			this.body.appendChild(this.p);
			this.a = document.createElement("a");
			this.body.appendChild(this.a);
			this.element.appendChild(this.body);
			this.outerElement.appendChild(this.element);
			this.wrapper.appendChild(this.outerElement);
			if (visible) body.appendChild(this.wrapper);
			this.added = true;
			this.removed = false;
		} else {
			this.outerElement.style.display = "block";
			this.removed = false;
		}

		this.alignContent(this.outerElement, this.position);
		this.element.className = "card mb-3 " + this.classes;
		this.element.id = this.id;
		this.element.style.width = "18rem";

		this.titleElement.innerText = this.title;
		if (this.subtitleElement) this.subtitleElement.innerText = this.subtitle;

		this.p.innerText = this.text;
		this.a.href = this.link[1];
		this.a.innerText = this.link[0];
		this.a.className = this.link[2] === "button" ? "btn btn-primary" : "card-link";
		if (this.button) this.a.onclick = this.button.onclick;
		this.button = this.a;
		this.setStyle(this.style);
		manageTheme(this.element, this.theme);
	}
}

class Grid extends basicUIObject {
	constructor(items, position = "left") {
		super();
		this.items = items;
		this.position = position;
		this.theme = "light";
		this.hiddenId = "grid-" + gridCount++;
		if (!["light", "dark"].includes(this.theme)) {
			throw `Theme can only be "light" or "dark"`;
		}
	}

	add(visible = true) {
		if (!this.added) {
			this.wrapper = this.wrap();
			this.outerElement = document.createElement("span");
			this.element = document.createElement("div");
			this.row = document.createElement("div");
			this.element.appendChild(this.row);
			this.outerElement.appendChild(this.element);
			this.wrapper.appendChild(this.outerElement);
			if (visible) body.appendChild(this.wrapper);
			this.added = true;
		} else {
			this.row.innerHTML = "";
			this.outerElement.style.display = "block";
			this.removed = false;
		}

		this.items.forEach((array) => {
			array.forEach((element) => {
				if (!this.added) element.add(false);
			});
		});

		this.alignContent(this.outerElement, this.position);
		this.element.className = "container " + this.classes;
		this.element.style.backgroundColor = this.theme === "dark" ? darkBackgroundColor : "white";
		this.element.id = this.id;
		this.element.style.borderRadius = ".25rem";
		this.items.forEach((itemRow) => {
			this.row.className = "row";
			itemRow.forEach((item) => {
				let col = document.createElement("div");
				col.className = "col";
				col.style.marginTop = "2vh";
				col.appendChild(item.wrapper);
				this.row.appendChild(col);
			});
		});
		this.setStyle(this.style);
	}
}

class Alert extends basicUIObject {
	constructor(text, type) {
		super();
		this.text = text;
		this.type = type;
		this.theme = "light";
		this.hiddenId = "alerts-" + alertCount++;
		let types = [" primary", " secondary", " success", " danger", " warning", " info", " light", " dark"];
		if (!types.includes(" " + type)) {
			throw `Type "${type}" is not recognized. Here is a list of all available types:${types}.`;
		}
	}

	add() {
		let alertField = document.getElementById("alertField");
		if (alertField) {
			let alert = document.createElement("div");
			alert.className = `alert alert-${this.type} ${this.classes}`;
			alert.id = this.id;
			alert.role = "alert";
			alert.innerHTML = this.text;
			let closeButton = document.createElement("button");
			closeButton.className = `btn-close`;
			closeButton.onclick = () => {
				alertField.removeChild(alert);
			}
			this.closeButton = closeButton;
			alert.appendChild(closeButton);
			this.wrapper = alertField;
			this.element = alert;
			alertField.appendChild(alert);
			this.setStyle(this.style);
		} else {
			throw "You need to create a field for alerts messages first. Use createAlertField function for that purpose.";
		}
	}
}

// function for changing the title of the webpage
function setTitle(title) {
	document.title = title;
}

// function for creating a navbar
function createNavBar(theme = "light", backgroundColor = "") {
	let nav = new NavBar(theme, backgroundColor);
	nav.add();
	return nav;
}

// function for setting the background color
function setBackgroundColor(color = "white") {
	body.style.cssText += "background-color: " + color + " !important;";
	backgroundColor = color;
}

// function for setting the font color
function setColor(color = "black") {
	body.style.cssText += "color: " + color + " !important;";
	fontColor = color;
}

// function for adding text
function addText(text, position = "left", color = "") {
	let element = new Text(text, position, color ? color : fontColor);
	element.add();
	return element;
}

// this function adds HTML code to the body
function addHTML(code) {
	let span = document.createElement("span");
	span.innerHTML = code;
	body.appendChild(span);
	return span;
}

// this function adds a header to the body
function addHeading(text, size = 6, position = "left") {
	let header = new Heading(text, size, position);
	header.add();
	return header;
}

// this function adds an input field to the body
function addInput(type, placeholder = "") {
	let input = new Input(type, placeholder);
	input.add();
	return input;
}

// this function adds a new line in the file
function addNewLine() {
	body.appendChild(document.createElement("br"));
}

// this function adds a button to the body
function addButton(text, type, position = "left") {
	let button = new Button(text, type, position);
	button.add();
	return button;
}

// this function creates a table
function createTable(firstRow, rows, position = "left") {
	let table = new Table(firstRow, rows, position);
	table.add();
	return table;
}

// this function creates a card
function createCard(title, text, link, image = "", position = "left") {
	let card = new Card(title, text, link, image, position);
	card.add();
	return card;
}

// this function creates a gird
function createGrid(items, position = "left") {
	let grid = new Grid(items, position);
	grid.add();
	return grid;
}

let themeToggleBusy = false;

// this function toggles the theme
function toggleTheme() {
	if (!themeToggleBusy) {
		themeToggleBusy = true;
		let copy;
		elements.forEach((element, index) => {
			element.theme = light ? "dark" : "light";
			element.update();
			if (element.removed === true) element.remove();
		});
		if (navbarObject) {
			navbarObject.setTitle(navbarObject.title[0], navbarObject.title[1]);
			copy = [...navbarObject.items];
			navbarObject.items = [];
			copy.forEach((item) => {
				navbarObject.addItem(item[0], item[1], item[2], item[3], item[4]);
			});
		}
		if (light) {
			body.className = body.className.replaceAll("bg-white", "");
			body.style.backgroundColor = darkBackgroundColor;
		} else {
			body.className += "bg-white";
		}
		if (backgroundColor) setBackgroundColor(backgroundColor);
		light = !light;
		themeToggleBusy = false;
	}
}

// this function creates a field for alerts
function createAlertField() {
	let alertField = document.createElement("span");
	alertField.id = "alertField";
	body.appendChild(alertField);
	return alertField;
}

// this function adds an alerts
function addAlert(text, type) {
	let alert = new Alert(text, type);
	alert.add();
	return alert;
}

// this function adds provided style to the style tag
function addStyle(string) {
	style.innerHTML += string;
}
