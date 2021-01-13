# Installing Node and Starting a Node App

## Initializing a Node Project

## Part 1 - Create a new folder for your node project
```text
mkdir my-first-proj
```
CD into the project folder

## Part 2 - Initialize Node inside the project folder.

```text
npm init -y
```

This accepts all default values at once

## Part 3 - Make your entry point.

Create your entry point file, Node will look for a file called `index.js` unless different name was specified\
(check the `main` value in `package.json` to find the name\).

```text
touch index.js
```
Write a console to check that it's working.

## Part 4 - Run your program!

To run a file in node via the command line, type `nodemon`.


&nbsp;
---

# Installing Express and Adding to a Node App

## Part 1 - Initializing the express app
```text
npm i express
```

`node_modules`

Each time you use npm to install a new package, this folder will populate with the package you installed, _along with all the dependencies of that package_.

 `(.gitignore this each time since it's so large)`

 ```text
echo "node_modules" >> .gitignore
```

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

---
&nbsp;
---

# Routes

A **route** is a combination of a _**URL pattern**_ and _**HTTP Verb**_.

### URL Pattern

Examples: `/search`, `/about`, `/blogs`, etc.

### HTTP Verb

There are 4 main HTTP verbs:

* `get`
* `post`
* `put`
* `delete`

These verbs represent a _method_ for the request

| HTTP Verb | CRUD | Example |
| :--- | :---: | ---: |
| GET | READ | Look at someone's profile on LinkedIn |
| POST | CREATE | Post on LinkedIn |
| PUT | UPDATE | Change your bio on LinkedIn |
| DELETE | DELETE | Delete a photo from LinkedIn |


## The Request and Response Objects

### request

The Request object, `req`, contains the data we would ever need. Three keys inside of it:

* `req.body` - this is where any submitted form data will be stored for us.
* `req.params` - this is where special route variables are stored for us.
* `req.query` - this is where the query string data is stored.

### response

The Response object, `res`, sends something back to the browser Examples:

* `res.send()` - sends back a string
* `res.render()` - used to render data into templates with the selected template engine


## Routes Examples

```javascript
app.get("/greet/:name/:lastname", (req, res) => {
  res.send("Hello " + req.params.name + " " + req.params.lastname);
});

app.get("/multiply/:x/:y", (req, res) => {
  res.send("The answer is: " + (req.params.x * req.params.y));
});

app.get("/add/:x/:y", (req, res) => {
  res.send("The answer is: " + (req.params.x + req.params.y));
});
```
---
&nbsp;
---

# Templates - EJS: Embedded Javascript

## Part 1 - Install EJS
``` text
npm i ejs
```

## Part 2 - Set the view engine to EJS

Above your routes, add 
```javascript
app.set('view engine', 'ejs');
```
This tells express that we'll be using ejs as our view engine.

## Part 3 - Adapt your routes to ejs

_**1.**_ Rename the .html files to .ejs files.

_**2.**_ Assign statements with `res.render(<file name>)` inside the `app.get()`.

## Part 4 - Create a Views Folder

Since each page will display different HTML, we'll have several HTML files, or views...

_**3.**_ Create a Views Folder in the parent directory of your project and add `index.ejs` and all other files within the folder.

```text
mkdir views
```

_**4.**_ Then render the index.ejs file within your index.js file

```javascript
app.get('/', (req, res)=>{
  res.render('index.ejs'); 
});
```

### The Cool Part: Templating with Variables

_Templating with variables_ means we can pass in an object to `res.render()` and access the values stored in it as variables inside the ejs template.

**index.js**

```javascript
app.get('/', function(req, res) {
  res.render('index', {name: "Sterling Archer", age: 35});
});
```

We now have access to a _name_ variable inside our `index.ejs` file. We can access this variable by embedding it into the html using this notation: `<%= embedded js goes here %>`.

---
&nbsp;
---

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
