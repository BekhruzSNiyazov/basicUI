setTitle("flashcards");

addNewLine();

createAlertField();

let heading = addHeading("Enter the data", 6, "center");
heading.setStyle("margin-top: 10vh;");

let title = addInput("text", "Title");
let front = addInput("text", "Front");
let back = addInput("text", "Back");

addStyle(`input { margin-top: 2vh !important; } #button { margin-top: 2vh; }`);

let inputs = [title, front, back];
inputs.forEach((input, index) => {
	input.setStyle("text-align: center;");
	input.position = "center";
	input.update();
});

let cards = [];

function addCard() {
	cards = [...cards, [title.element.value, front.element.value, back.element.value]];
	addAlert("Card added!", "primary");
	inputs.forEach((input, index) => {
		input.element.value = "";
	});
}

let addCardButton = addButton("Add Card", "primary", "center");
addCardButton.id = "button";
addCardButton.onclick = addCard;
addCardButton.update();

function showFrontSide(flashcard, card) {
	flashcard.text = card[1];
	flashcard.link = ["Back", "#", "button"];
	flashcard.update();
	flashcard.button.onclick = () => { showBackSide(flashcard, card); };
}

function showBackSide(flashcard, card) {
	flashcard.text = card[2];
	flashcard.link = ["Front", "#", "button"];
	flashcard.update();
	flashcard.button.onclick = () => { showFrontSide(flashcard, card); };
}

let viewButton = addButton("View all cards", "secondary", "center");
viewButton.setStyle(`position: fixed; bottom: 15vh;`);
viewButton.update();

let flashcards = [];

let grid = new Grid();

let first = true;

function createCardView() {
	grid.remove();
	heading.add(false);
	inputs.forEach((input, index) => {
		input.add(false);
	});
	addCardButton.id = "button";
	addCardButton.onclick = addCard;
	addCardButton.add(false);
	viewButton.text = "View all cards";
	viewButton.onclick = cardView;
	viewButton.update();
}

function cardView() {
	heading.remove();
	inputs.forEach((input, index) => {
		input.remove();
	});
	addCardButton.remove();
	grid.items = [];
	flashcards = [];
	cards.forEach((card) => {
		let flashcard = new Card(card[0], card[1], ["Back", "#", "button"], "", "center");
		flashcard.add(false);
		flashcard.button.onclick = () => { showBackSide(flashcard, card); }
		flashcards = [...flashcards, flashcard];
	});
	grid.items = [Array.from(flashcards)];
	if (first) {
		grid.add();
		first = false;
	} else {
		grid.update();
	}
	viewButton.text = "Create more cards";
	viewButton.onclick = createCardView;
	viewButton.update();
}

viewButton.element.onclick = () => {
	cardView();
}
