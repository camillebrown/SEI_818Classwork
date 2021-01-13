# Layouts and Controllers

EJS layouts is a node package that allows us to create a boilerplate that we can inject content into based on which route is reached. Layouts normally include header and footer content that you want to display on every page \(navbar, sitemap, logo, etc.\).

## Part 1 - Install EJS Layouts

Install `express-ejs-layouts` via npm

```text
npm i express-ejs-layouts
```

## Part 2 - Set up EJS layouts

Require the module and add it to the app.

**index.js**

```javascript
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.listen(3000)
```

## Part 3 -  Create a Layout

In the root of the `views` folder, add a layout called `layout.ejs`. It _must_ be called `layout.ejs`, as mandated by `express-ejs-layouts`.

**layout.ejs**

```markup
<!DOCTYPE html>
<html>
<head>
  <title>Love It or Leave It</title>
</head>
<body>
  <%- body %>
</body>
</html>
```

## Part 4 - Controllers & Express Router

Controllers become important organizational tools when you start making apps with several views.

_**1.**_ Create a `controllers` folder inside the root directory that will contain all routes except for the home route.

_**2.**_ Inside the `controllers` folder, create a js file for your main url patterns and routes. 

Express has a `Router()` function that will help us wrap these routes into a module that we'll export back into our main server file.

_**5.**_ Replace `app` with `router` in each route and add the below code:

```javascript
const express = require('express');
const router = express.Router();

module.exports = router;
```

_**6.**_ Now back in `index.js`, we just need to add some middleware to get these routes working again!

**index.js**

```javascript
app.use('/loveit', require('./controllers/loveit'));
```
This middelware says *"Dear Express, if you get a request for a url pattern that starts with `/loveit`, please to to the `loveit` controller file to find the relevant routes."* S
