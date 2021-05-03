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

#### Examples
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
let navbar = createNavbar(); // creating the navbar and saving it in a variable to access it later
navbar.setTitle("Example"); // changing the title of the navbar
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
- `properties` is for the properties of the item
- `position` represents the position of the item on the navbar (`left` or `right`)
- `classes` can be used for accessing from JavaScript or CSS
- `id` same thing as `classes` with one difference: `id`s are unique.
