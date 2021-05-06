# basicUI
basicUI is an [open source](https://github.com/BekhruzSNiyazov/basicUI) front-end JavaScript framework designed to build webpages, created by [Bekhruz Niyazov](https://github.com/BekhruzSNiyazov).

<hr>

# Setup
To get basicUI up and running the only thing you need to do is to import it.

To do that add this line as the first tag of the body of your webpage:
```html
<script src="https://cdn.jsdelivr.net/gh/BekhruzSNiyazov/basicUI/src/basicUI.js" crossorigin="anonymous"></script>
```
After that, add a script tag that will contain all JavaScript code. You can provide the JavaScript as a seperate file or you can just write code in your HTML file.
```html
<script type="text/javascript">
    // JavaScript code
</script>
```
or
```html
<script type="text/javascript" src="filename.js"></script>
```

<hr>

# Navbar
To create a navbar with a `createNavBar` function. `createNavBar` takes 2 arguments:

- `theme` is set to `light` by default; can be either `light` or `dark`
- `backgroundColor` by default depends on the theme; you can use colors just as you do in CSS (`red`, `#fff`, `rgb(100, 100, 100)`)

<hr>

#### Example
This code creates a default light navbar with a light background
```javascript
createNavBar();
```
Add `theme` argument to change the theme of the navbar:
```javascript
createNavBar("dark");
```
If you want to change the background color of the navbar add another argument:
```javascript
createNavBar("dark", "#787878");
```

<hr>

To change the title on the navbar you can use `.setTitle` method. Here is an example of how you can do that:
```javascript
// creating the navbar and saving it in a variable to access it later
let navbar = createNavbar();
// changing the title of the navbar
navbar.setTitle("Example");
```

<hr>

If you want to add an element to the navbar use `.addItem` method. `.addItem` takes 5 arguments:

- `role` represents what an item should be. Here are all possible item roles:
    - `home` for links to home pages
    - `logo` for logos
    - `link` for links to pages
    - `text` for texts
    - `input` for input fields
    - `button` for buttons
    - `dropdown` for dropdowns
- `properties` is for the properties of the item. `properties` can take several forms depending on the role of the item:
    - `displayed text` when role is `home`
    - an array of 3 items when role is `logo`:
        - `path to the source of the image`
        - `width of the image`
        - `height of the image`
    - an array of 2 items when role is `link`:
        - `displayed text`
        - `link`
    - `displayed text` when role is `text`
    - an array of 2 items when role is `input`:
        - `type` of the input field (standard HTML input types: `text`, `password`, etc.)
        - `placeholder` of the input field
    - an array of 2 items when role is `button`:
        - `type` of button (`primary`, `secondary`, `info`, etc.; See [this](https://getbootstrap.com/docs/5.0/components/buttons/#examples) link for all types)
        - `displayed text`
    - an array of 2 items when role is `dropdown`:
        - `displayed text`
        - an array of infinite number of arrays of 2 items:
            - `displayed text`
            - `link`
- `position` represents the position of the item on the navbar (`left` or `right`); it is set to `left` by default
- `classes` can be used for accessing from JavaScript or CSS; it is set to `""` by default
- `id` same thing as `classes` with one difference: `id`s are unique; it is set to `""` by default

<hr>

#### Example
This code creates a dark navbar with 7 items: `home`, `logo`, `link`, `text`, `input`, `button`, `dropdown`:
```javascript
// creating the navbar
let navbar =  createNavBar("dark");

// changing the title of the navbar
navbar.setTitle("Example");

// adding a home link to the navbar
navbar.addItem("home", "Home");

// adding a logo to the navbar
navbar.addItem("logo", ["images/logo.png", 175, 50]);

// adding a link to another page
navbar.addItem("link", ["Another Page", "/another"]);

// adding some text on the right side of the navbar
navbar.addItem("text", "Just Text", "right");

// adding an input field on the right side of the navbar
navbar.addItem("input", ["text", "Type something"], "right");

// adding a button on the right side of the navbar
navbar.addItem("button", ["primary", "Button"], "right");

// adding a dropdown
navbar.addItem("dropdown", ["Items", [["Hello", "/hello"], ["World", "/world"]]]);
```
Full code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <!-- importing basicUI -->
    <script src="https://cdn.jsdelivr.net/gh/BekhruzSNiyazov/basicUI/src/basicUI.js" crossorigin="anonymous"></script>
    <script type="text/javascript">
        // creating the navbar
        let navbar = createNavBar("dark");

        // changing the title of the navbar
        navbar.setTitle("Example");

        // adding a home link to the navbar
        navbar.addItem("home", "Home");

        // adding a logo to the navbar
        navbar.addItem("logo", ["images/logo.png", 175, 50]);

        // adding a link to another page
        navbar.addItem("link", ["Another Page", "/another"]);

        // adding some text on the right side of the navbar
        navbar.addItem("text", "Just Text", "right");

        // adding an input field on the right side of the navbar
        navbar.addItem("input", ["text", "Type something"], "right");

        // adding a button on the right side of the navbar
        navbar.addItem("button", ["primary", "Button"], "right");

        // adding a dropdown
        navbar.addItem("dropdown", ["Items", [["Hello", "/hello"], ["World", "/world"]]]);
    </script>
</body>
</html>
```
Result:
![result](https://firebasestorage.googleapis.com/v0/b/basic-social-network-71deb.appspot.com/o/demo1.png?alt=media&token=740f81e8-4c7f-4355-9b95-331961d1ec65)

<hr>

# Text
Adding text to your webpage is really simple: just call the `addText` function. It takes 3 arguments:
- `text` (required)
- `position` (by default is set to `left`, can be `left` or `right` or `center`)
- `color` (by default is the font color of the whole webpage)

#### Example
```javascript
addText("Hello, world!");
addText("Hello again, now in red and on the center!", "center", "red");
```

<hr>

# Heading
To add a heading you need to use the `addHeading` function. It takes 3 arguments:
- `text` (required)
- `size` (from 1 to 6, the biggest is 6, by default is set to 6)
- `position` (by default is set to `left`, can be `left` or `right` or `center`)

#### Example
```javascript
addHeading("Hello, heading", 5, "center");
```

<hr>

# Input field
To add an input field use `addInput` function. It takes 2 arguments:
- `type` of the input field (required, can be `text`, `number`, `password`, etc.)
- `placeholder` (by default is set to `""`)

#### Example
```javascript
addInput("number", "Enter a number");
```

<hr>

# Button
To create a button use the `addButton` function. It takes 3 arguments:
- `text` (required)
- `type` (required, see [this](https://getbootstrap.com/docs/5.0/components/buttons/#examples) link for all available types)
- `position` (by default is set to `left`, can be `left` or `right` or `center`)

#### Example
```javascript
addButton("Click me!", "primary", "center");
```

<hr>

# Table
Creating a table is really simple. To do that, call the `createTable` function. It takes 3 arguments:
- `first row` (required, should be an array of items of the first row)
- `rows` (required, should be an array of arrays of items of rows)
- `position` (by default is set to `left`, can be `left` or `right` or `center`)

#### Example
```javascript
createTable(["#", "Language", "Compiled/Interpreted"], 
    [
        ["1", "Python", "Interpreted"],
        ["2", "C", "Compiled"],
        ["3", "JavaScript", "Interpreted"]
    ],
    "center"
)
```

<hr>

# Card
To create a card call the `createCard` function
