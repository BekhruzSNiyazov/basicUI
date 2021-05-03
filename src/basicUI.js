// importing bootstrap css
let bootstrapLink = document.createElement("link");
bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css";
bootstrapLink.rel = "stylesheet";
bootstrapLink.integrity = "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6";
bootstrapLink.crossOrigin = "anonymous";
document.head.appendChild(bootstrapLink);
// importing bootstrap js
let bundleLink = document.createElement("script");
bundleLink.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js";
bundleLink.integrity = "sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf";
bundleLink.crossOrigin = "anonymous";
document.head.appendChild(bundleLink);
// increasing the font size of each element
let style = document.createElement("style");
style.innerHTML = `* { font-size: 1.2rem !important; } .short-input { width: 20vw }`;
document.head.appendChild(style);

// the font color
let fontColor = "";
let textCount = 0;
let inputCount = 0;
let buttonCount = 0;
let tableCount = 0;
let cardCount = 0;

// this function aligns the given element
function alignContent(element, position) {
	element.style.display = "flex";
	if (position === "left") {
		element.style.justifyContent = "flex-start";
	} else if (position === "right") {
		element.style.justifyContent = "flex-end";
	} else if (position === "center") {
		element.style.justifyContent = "center";
	} else {
		throw `Position should be "left" or "right" or "center"`;
	}
}

class basicUIObject {
	// this function removes element from the body
	remove() {
		this.element.remove();
		this.element = null;
		this.removed = true;
	}

	// this function updates the element
	update() {
		this.remove();
		this.add();
	}

	// this function sets the style to the element
	setStyle(style) {
		if (this.element) {
			this.element.style.cssText += style;
		} else {
			throw "Add element with .add method first";
		}
	}

	// this function wraps the element
	wrap() {
		let wrapper;
		if (this.removed) {
			wrapper = document.getElementById(this.hiddenId);
			this.removed = false;
		} else {
			wrapper = document.createElement("span");
			wrapper.id = this.hiddenId;
		}
		return wrapper;
	}
}

class navBar {
	constructor(theme, backgroundColor) {
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
	}

	// this function adds the navbar to the body
	addSelf() {
		let nav = document.createElement("nav");
		nav.className = `navbar navbar-expand-lg navbar-${this.theme} bg-${this.theme}`;
		nav.innerHTML = this.src;
		if (this.backgroundColor !== "") {
			nav.style.setProperty("background-color", this.backgroundColor, "important");
		}
		document.body.appendChild(nav);
		this.element = nav;
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
	}

	// this function adds an item to the navbar
	addItem(role, properties, position = "left", classes = "", id = "") {
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
			navImage.innerHTML = `<img src="${properties[0]}" class="${classes}" id="${id}" alt="Navbar Image"
				width="${properties[1]}" height="${properties[2]}" class="d-inline-block align-text-top">` + navImage.innerHTML;
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

	setStyle(style) {
		if (this.element) {
			this.element.style.cssText += style;
		}
		else {
			throw "Add element with .add method first";
		}
	}
}

class Text extends basicUIObject {
	constructor(text, position) {
		super();
		this.text = text;
		this.position = position;
		this.color = ""
		this.classes = "";
		this.id = "";
		this.hiddenId = "text" + textCount++;
		this.removed = false;
	}

	// this function adds text to the body
	add() {
		let wrapper = this.wrap();
		let div = document.createElement("div");
		div.className = this.classes;
		div.id = this.id;
		div.innerText = this.text;
		div.style.textAlign = this.position;
		div.style.color = this.color;
		this.element = div;
		wrapper.appendChild(div);
		document.body.appendChild(wrapper);
	}
}

class Input extends basicUIObject {
	constructor(type, placeholder) {
		super();
		this.type = type;
		this.placeholder = placeholder;
		this.value = "";
		this.position = "left";
		this.width = "";
		this.color = "";
		this.backgroundColor = "";
		this.borderColor = "";
		this.classes = "";
		this.id = "";
		this.hiddenId = "input" + inputCount++;
		this.removed = false;
	}

	// this function adds input to the body
	add() {
		let wrapper = this.wrap();
		let span = document.createElement("span");
		alignContent(span, this.position);
		let input = document.createElement("input");
		input.className = "form-control " + this.classes;
		input.id = this.id;
		input.type = this.type;
		input.placeholder = this.placeholder;
		input.value = this.value;
		if (!this.width) {
			input.className += " short-input";
		} else {
			input.style.width = this.width;
		}
		if (this.color) input.style.setProperty("color", this.color, "important");
		if (this.backgroundColor) input.style.setProperty("background-color", this.backgroundColor, "important");
		if (this.borderColor) input.style.setProperty("border-color", this.borderColor, "important");
		span.appendChild(input);
		this.element = input;
		wrapper.appendChild(span);
		document.body.appendChild(wrapper);
	}
}

class Button extends basicUIObject {
	constructor(text, type, position) {
		super();
		this.text = text;
		this.type = type;
		this.position = position;
		this.color = "";
		this.backgroundColor = "";
		this.borderColor = "";
		this.classes = "";
		this.id = "";
		this.hiddenId = "button" + buttonCount++;
		this.removed = false;
		let types = [" primary", " secondary", " success", " danger", " warning", " info", " light", " dark"];
		if (!types.includes(" " + type)) {
			throw `The type ${type} was not recognized. Here is the list of available types:${types}`;
		}
	}

	// this function adds the button to the body
	add() {
		let wrapper = this.wrap();
		let span = document.createElement("span");
		alignContent(span, this.position);
		let button = document.createElement("button");
		button.className = "btn btn-" + this.type + " " + this.classes;
		button.id = this.id;
		button.innerText = this.text;
		button.style.color = this.color;
		button.style.backgroundColor = this.backgroundColor;
		button.style.borderColor = this.borderColor;
		span.appendChild(button);
		this.element = button;
		wrapper.appendChild(span);
		document.body.appendChild(wrapper);
	}
}

class Table extends basicUIObject {
	constructor(firstRow, rows, position) {
		super();
		this.firstRow = firstRow;
		this.rows = rows;
		this.position = position;
		this.classes = "";
		this.id = "";
		this.hiddenId = "table" + tableCount++;
		this.removed = false;
	}

	// this function adds table to the body
	add() {
		let wrapper = this.wrap();
		let span = document.createElement("span");
		alignContent(span, this.position);
		let table = document.createElement("table");
		table.className = "table " + this.classes;
		table.id = this.id;
		let thead = document.createElement("thead");
		let trHead = document.createElement("tr");
		this.firstRow.forEach((element, index) => {
			let th = document.createElement("th");
			th.scope = "col";
			th.innerText = element;
			trHead.appendChild(th);
		});
		thead.appendChild(trHead);
		table.appendChild(thead);
		let tbody = document.createElement("tbody");
		this.rows.forEach((row, index) => {
			let tr = document.createElement("tr");
			row.forEach((element, i) => {
				let td = document.createElement("td");
				td.innerText = element;
				tr.appendChild(td);
			});
			tbody.appendChild(tr);
		});
		table.appendChild(tbody);
		this.element = table;
		span.appendChild(table);
		wrapper.appendChild(span);
		document.body.appendChild(wrapper);
	}
}

class Card extends basicUIObject {
	constructor(title, text, link, image, position) {
		super();
		this.title = title;
		this.subtitle = "";
		this.text = text;
		this.link = link;
		this.image = image;
		this.position = position;
		this.classes = "";
		this.id = "";
		this.hiddenId = "card" + cardCount++;
		this.removed = false;
	}

	add() {
		let wrapper = this.wrap();
		let span = document.createElement("span");
		alignContent(span, this.position);
		let card = document.createElement("div");
		card.className = "card " + this.classes;
		card.id = this.id;
		card.style.width = "18rem";
		if (this.image !== "") {
			let image = document.createElement("img");
			image.src = this.image ? this.image : "...";
			image.class = "card-img-top";
			image.alt = "Card Image";
			card.appendChild(image);
		}
		let div = document.createElement("div");
		div.className = "card-body";
		let title = document.createElement("h5");
		title.className = "card-title";
		title.innerText = this.title;
		div.appendChild(title);
		if (this.subtitle) {
			let subtitle = document.createElement("h6");
			subtitle.className = "card-subtitle mb-2 text-muted";
			subtitle.innerText = this.subtitle;
			div.appendChild(subtitle);
		}
		let p = document.createElement("p");
		p.className = "card-text";
		p.innerText = this.text;
		div.appendChild(p);
		let a = document.createElement("a");
		a.href = this.link[1];
		a.innerText = this.link[0];
		a.className = this.image ? "btn btn-primary" : "card-link";
		div.appendChild(a);
		card.appendChild(div);
		span.appendChild(card);
		this.element = card;
		wrapper.appendChild(span);
		document.body.appendChild(wrapper);
	}
}

// function for changing the title of the webpage
function setTitle(title) {
	document.title = title;
}

// function for creating a navbar
function createNavBar(theme = "light", backgroundColor = "") {
	let nav = new navBar(theme, backgroundColor);
	nav.addSelf();
	return nav;
}

// function for setting the background color
function setBackgroundColor(color = "white") {
	document.body.style.backgroundColor = color;
}

// function for setting the font color
function setColor(color = "black") {
	document.body.style.color = color;
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
	document.body.appendChild(span);
	return span;
}

// this function adds a header to the body
function addHeader(text, position = "left", size = 6) {
	let header = document.createElement("h" + (7 - size));
	header.innerText = text;
	header.style.textAlign = position;
	document.body.appendChild(header);
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
	document.body.appendChild(document.createElement("br"));
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

function createCard(title, text, link, image = "", position = "left") {
	let card = new Card(title, text, link, image, position);
	card.add();
	return card;
}
