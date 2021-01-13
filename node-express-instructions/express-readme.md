# Installing Express and Adding to a Node App

## Part 1 - Initializing the express app
```text
npm i express
```

`node_modules`

Each time you use npm to install a new package, this folder will populate with the package you installed, _along with all the dependencies of that package_.

 `(.gitignore this each time since it's so large)`


## Part 2 - Import the Express module

Within _**index.js**_

``` javascript
const express = require('express');
```

## Part 3 - Create an instance of an express app

``` javascript
const app = express();
```

## Part 4 - Create a Home Route

``` javascript
app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.listen(8000);
```

## Part 5 - Run nodemon
```text
nodemon
```
