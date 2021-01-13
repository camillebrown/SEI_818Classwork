const makeSketchBoard = (value) => {
    let container = document.querySelector('#container')
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
        for (let i=0; i<=value; i++){
            let box = document.createElement('div')
            box.classList.add('square')
            container.appendChild(box)
            box.addEventListener('mouseover', changeColor)
        }
}

const changeColor = (event) => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    event.target.style.backgroundColor = `rgb(${red},${green},${blue})`
}

document.addEventListener('DOMContentLoaded', ()=>{
    let button = document.querySelector('#inputButton')
    button.addEventListener('click', ()=>{
        makeSketchBoard(inputBox.value)
    })
})










