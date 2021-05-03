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

# Creating Navbar
You can create a navbar with a `createNavBar` function. `createNavBar` takes 2 arguments:

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
        - an infinite array of arrays of 2 items:
            - `displayed text`
            - `link`
- `position` represents the position of the item on the navbar (`left` or `right`); it is set to `left` by default
- `classes` can be used for accessing from JavaScript or CSS; it is set to `""` by default
- `id` same thing as `classes` with one difference: `id`s are unique; it is set to `""` by default

<hr>

### Example
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
navbar.addItem("dropdown", ["Items", ["Hello", "World"]]);
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
        navbar.addItem("dropdown", ["Items", ["Hello", "World"]]);
    </script>
</body>
</html>
```
Result:
![result](https://firebasestorage.googleapis.com/v0/b/basic-social-network-71deb.appspot.com/o/demo1.png?alt=media&token=b3a97337-c2c2-4f83-a620-8de8fb73ec1f)

<hr>
