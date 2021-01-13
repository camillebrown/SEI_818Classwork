console.log('Stranger things are coming.')

const myHeadline = document.querySelector('h1')
myHeadline.innerText = "Welcome to the Upsidedown"
    
let image = document.querySelector('img')
image.style.display = "none"
image.style.display = "block"
// image.style.filter = "grayscale(100%)"
image.style.width = "95%"
// image.style.filter = ""

const eggos = document.createElement('img')
// first arg: what attribute are we setting
// second arg: what value are we setting it to?
// eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')

eggos.src = 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg'

// get the container div
const container = document.querySelector('.container')
container.appendChild(eggos)
eggos.remove()


// setTimeout(()=> {
// myHeadline.innerText = "Welcome to the Upsidedown"
// }, 5000)

const listItems = document.querySelectorAll('li')
console.log(listItems[0])

listItems[0].innerText = "Demo Dog Hangout"
listItems[4].style.color = "hotpink"
listItems[3].remove()

// this takes 7 seconds to finish running
setTimeout(()=>{
    image.style.filter = "grayscale(30%)"
}, 3000)

setTimeout(()=> {
    image.style.filter = "grayscale(40%)"
}, 4000)

setTimeout(()=> {
    image.style.filter = "grayscale(50%)"
}, 5000)

setTimeout(()=> {
    image.style.filter = "grayscale(60%)"
}, 6000)

setTimeout(()=> {
    image.style.filter = ""
}, 7000)