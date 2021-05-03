![](images/logo.png)
# basicUI
basicUI is a front end JavaScript framework created by Bekhruz Niyazov.

It is still in development.

[Documentation](https://bekhruzsniyazov.github.io/basicUI)

[Examples](https://github.com/BekhruzSNiyazov/basicUI/tree/master/examples/)

# Getting started
Here is an example of how you can use `basicUI`:

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <!-- importing basicUI -->
    <script src="https://cdn.jsdelivr.net/gh/BekhruzSNiyazov/basicUI/src/basicUI.js" crossorigin="anonymous"></script>
    <!-- your JavaScript code -->
    <script src="index.js"></script>
</body>
</html>
```
`index.js`
```js
let navbar = createNavBar();
navbar.setTitle("Example");
```
Or, you can write all code in one file:

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <!-- importing basicUI -->
    <script src="https://cdn.jsdelivr.net/gh/BekhruzSNiyazov/basicUI/src/basicUI.js" crossorigin="anonymous"></script>
    <!-- your JavaScript code -->
    <script>
        let navbar = createNavBar();
        navbar.setTitle("Example");
    </script>
</body>
</html>
```
# License
This code is licensed with MIT license.
