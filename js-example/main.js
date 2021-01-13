// alert("HELLLOOOO World!");

// const yourAnswer = prompt("Some question", "A default value goes here")
// console.log(yourAnswer)

// const yourAnswer = prompt("Do you like apples?", "Yes/No")

// if (yourAnswer === "Yes") {
//     console.log("GREAT!");
// } else if (yourAnswer === "No") {
//     console.log("HOW CAN YOU NOT LIKE APPLES?!")
// } else{
//     console.log("Does not compute!")
// }

// const greet = () => {
//     alert("Hi!");
// };

// const sayBye = () => {
//     alert("Bye!");
// };

// const answer = prompt("Are you arriving or leaving", "Arriving or Leaving?");

// if (answer === "Arriving") {
//     greet();
// } else if (answer === "Leaving") {
//     sayBye();
// };

// let action = null;

// while(action !== "stop"){
//     action = prompt("What do you want to do?", "Your action");
// }

// const func1 = () => {
//     console.log("hello");
// };

// const func2 = () => {
//     console.log("oh hai");
//     func1();
// };

// func2();

// const func1 = () => {
//     console.log(1);
//     func2();
//     func3();
//     console.log("Finished");
// };

// const func2 = () => {
//     console.log(2);
//     func4();
//     func6();
// };

// const func3 = () => {
//     console.log(3);
//     func5();
// };

// const func4 = () => {
//     console.log(4);
// };

// const func5 = () => {
//     console.log(5);
// };

// const func6 = () => {
//     console.log(6);
// };

// func1();

// let apples;
// let money;

// const start = () => {
//     apples = 0;
//     money = 20;
//     askForAction(); //invoking function
// };

// const showStatus = () => {
//     alert("You have " + apples + " apples and $" + money);
// };

// const askForAction = () => {
//     showStatus();
//     const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");

//     if(choice === "buy apple") {
//         buyApple();
//     } else if(choice === "eat apple") {
//         eatApple();
//     } else if(choice === "restart") {
//         start();
//     }
// };

// const buyApple = () => {
//     apples++;
//     money -=1;
//     askForAction();
// };

// const eatApple = () => {
//     apples--;
//     askForAction();
// };

// start();

// let myDiv = document.getElementById("hello");

// console.log(myDiv);

// let theSquares = document.getElementsByClassName("square")

// console.log(theSquares[0]);
// console.log(theSquares[1]);

// let theDivs = document.getElementsByTagName("div")
// console.log(theDivs[0]);
// console.log(theDivs[1]);


// let myDiv2 = document.querySelector("#gb");
// console.log(myDiv2);

// let mySquares2 = document.querySelectorAll(".square");
// console.log(mySquares2[1]);

// // use the selector to change styles
// myDiv.style.backgroundColor = "green";
// myDiv2.style.height = "300px";

// //use the selector to change content
// myDiv.innerText = "I LOVE GA!"
// myDiv2.innerHTML = "<h2>THIS IS AWESOME!</h2>"

// let myH2 = document.getElementsByTagName("h2")
// console.log(myH2)

// create element

// var a = document.createElement("a");
// a.href = "http://hackertyper.com"
// a.textContent = "HACK!";

// //adds link to the bottom of the page
// document.body.appendChild(a);

// // ============================================ //
let list = document.getElementById("my-favorite-movies");

// // CREATE
// let newMovie = document.createElement("li");

// // MODIFY
// newMovie.textContent = "Pirates of Silicon Valley"

// // ATTACH

// list.appendChild(newMovie);

// ============================================ //

// Syntax to add beginning or in the middle of an existing element
// let insertedNode = parentNode.insertBefore(newNode, referenceNode);

let newMovie = document.createElement("li");
newMovie.innerText = "Dr. StrangeLove";

// get reference to the second element inside the list
let second = list.children[1];
console.log(second);

list.insertBefore(newMovie, second)

// remove an element 

list.removeChild(second);