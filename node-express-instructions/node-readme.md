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