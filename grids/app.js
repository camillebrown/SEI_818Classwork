//Run a function that generates 64 squares that alternate colors:

let container = document.createElement('div')
document.querySelector('body').append(container)
container.className = 'container'


const board = () => {
    for (let i=0; i<64; i++){
        if(i%2 === 0) {
        const square = document.createElement('div')
        square.className = 'red'
        square.id = i
        square.style.backgroundColor = 'red';
        // document.getElementsByClassName('container').appendChild(square)
        container.appendChild(square)
    } else {
        const square = document.createElement('div')
        square.className = 'black'
        square.id = i
        square.style.backgroundColor = 'black';
        container.appendChild(square)
     }
    }
}



document.addEventListener('DOMContentLoaded', ()=>{
    board()
})