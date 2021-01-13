//Add an input element that takes a new URL that allows you to add a new URL string to your array
const input = document.createElement('input')
const button = document.createElement('button')
button.innerText = 'Submit New Image'

//Append these to the body
document.querySelector('body').appendChild(input)
document.querySelector('body').appendChild(button)

//grab the user's input and store it in a variable
// const textInput = input.value

//run a function that creates a new square using the text that was input as the image source of the new div
const imageInput = () => {
    images.push(input.value)
    input.value = ''
}

//when the button is clicked, run the function to add the image
button.addEventListener('click', imageInput)




//Using javascript dom manipulation, make a div with the text "Add random image". Add a class to make the div square (100 x 100). Give it some color.

const div = document.createElement('div')
div.classList.add('square')
div.innerText = 'Add Random Image'
document.querySelector('body').appendChild(div)

// The div should have cursor: pointer in its CSS, so that when the user hovers the cursor over the div, the cursor turns into a pointer thing.

div.style.cursor = "pointer";

// Make an array of six image urls in your js file. (strings)

const images = [
    'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900',
    'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg', 
    'https://i.insider.com/5efe3d7faee6a8324a656478?width=1100&format=jpeg&auto=webp',
    'https://bgr.com/wp-content/uploads/2016/11/puppy-dog.jpg?quality=70&strip=all&w=834',
    'https://i.ebayimg.com/images/g/W9gAAOSwf05bGvqH/s-l400.jpg',
    'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F76822646-913c-11e9-b2d4-5918cdd6778e.jpg?crop=4229%2C2820%2C340%2C19'
]

// Make it so that when you click the "Add random image" div, one random image from your array will appear on the page.

const newDiv = () => {
    for(let i=0; i<images.length; i++) {
        var image = document.createElement('img')
        const randomNum = Math.floor(Math.random()*images.length)
        image.classList.add('square')
        // image.setAttribute('id', indexOf(randomNum))
        image.src = images[randomNum]
        image.style.cursor = 'pointer'
    }
    document.querySelector('body').appendChild(image)
    image.addEventListener('click', image.remove)
}
div.addEventListener('click',newDiv)

// Make it so that each image is re-sized to the same proportions as the square div (100 x 100). Or, you could use Google images -> Tools -> Size to source images at the size you want.

// Make it so an image is added rather than replaced.

// Make it so the images are added horizontally.

//Make it so that when you click on one of the added images, it will be removed from the page.







