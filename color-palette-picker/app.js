const addColor = (event) => {
    const color = event.target.style.backgroundColor
    const newSquare = document.createElement('div')
    newSquare.classList.add('square')
    newSquare.style.backgroundColor = color
    // newSquare.style.overflow = "hidden"
    document.querySelector('#my-palette').appendChild(newSquare)
}

const makePalette = () => {
    const colorPalette = document.querySelector('#color-palette')
    //clear any children of the color-palette that are already existing
    while(colorPalette.firstChild) {
        colorPalette.removeChild(colorPalette.firstChild)
    }
    //Generate 150 divs (squares) each with their own random color.
    for (let i=0; i<150; i++){
        const square = document.createElement('div')
        square.classList.add('square')
    //append them to the color-palette div
        colorPalette.appendChild(square)
    //make each square have a random color
        const red = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
    //build the random color
        const color = `rgb(${red}, ${green}, ${blue})`
        square.style.backgroundColor = color
    //listen for the click event on my square
        square.addEventListener('click', addColor)
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    makePalette()
    document.querySelector('#generate').addEventListener('click',makePalette)
})