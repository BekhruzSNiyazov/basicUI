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
// increase the font size of each element
let style = document.createElement("style");
style.innerHTML = `* { font-size: 1.2rem !important; }`;
document.head.appendChild(style);

// the class that contains all navbar functions
class navBar {
	constructor(theme) {
		this.theme = theme;
		this.src = `<div class="container-fluid">
						<a class="navbar-brand" id="navbar-image" href="#" style="padding-top: 0;"></a>
						<a class="navbar-brand" id="navbar-title" href="#">Navbar</a>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0" id="items-list"></ul>
							<div class="d-flex navbar-nav" id="items-list-right"></divc>
						</div>
					</div>`;
	}

	// this function adds the navbar to the body
	add() {
		let nav = document.createElement("nav");
		nav.className = `navbar navbar-expand-lg navbar-${this.theme} bg-${this.theme}`;
		nav.innerHTML = this.src;
		document.body.appendChild(nav);
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
				let el = document.createElement("a");
				el.className = "dropdown-item";
				el.href = "#";
				el.innerText = text;
				let liEl = document.createElement("li");
				liEl.appendChild(el);
				ul.appendChild(liEl);
			});
		} else {
			throw `Role "${role}" is not recognized`;
		}
		list.appendChild(li);
		return li;
	}
}

// function for changing the title of the webpage
function setTitle(title) {
	document.title = title;
}

// function for creating a navbar
function createNavBar(theme = "light") {
	let nav = new navBar(theme);
	nav.add();
	return nav;
}
