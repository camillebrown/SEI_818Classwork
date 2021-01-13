// console.log("Here we go")

let headline = document.getElementById("feat")
console.log(headline)

let h2 = document.querySelector("h2")
console.log(h2)

h2.innerText="Welcome to Westchester, LA!!!"

let containerElements = document.getElementsByClassName("container")
console.log(containerElements)

const listItems = document.querySelectorAll('li')

// listItems[2].style.color = "mediumorchid"

// listItems[3].innerText="Jamboree sandwich at the Jambo-ree"

const newImg = document.createElement("img")
newImg.setAttribute('src', "westchester-playground.jpg")

const container = document.querySelector('.container')
container.appendChild(newImg)

const fullList = document.querySelector("ol")

fullList.style.color = "salmon"

newImg.remove()