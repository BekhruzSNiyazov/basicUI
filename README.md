![](images/logo.png)
# basicUI
basicUI is a front end JavaScript framework created by Bekhruz Niyazov.

It is still in development.

[Learn by examples.](https://github.com/BekhruzSNiyazov/basicUI/tree/master/examples/)
# Getting started
Here is an example of how you can use `basicUI`:

<script>
    const elem = document.createElement('textarea');
    elem.value = "https://cdn.jsdelivr.net/gh/BekhruzSNiyazov/basicUI/src/basicUI.js";
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
</script>

<button onclick="copy();">Copy basicUI Library Link</button>

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