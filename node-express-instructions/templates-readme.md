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

_**3.**_ Create a Views Folder in the parent directory of your project and add all `ejs` files within the folder. 

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
