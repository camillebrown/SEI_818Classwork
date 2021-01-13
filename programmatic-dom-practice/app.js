const addH2 = () => {
    // create new h2
    let h2 = document.createElement('h2')
    // grab the body and append our new element to it
    document.querySelector('body').append(h2)
}

const changeH2 = () => {
    // const h2 = document.querySelector('h2')
    // h2.innerText = "Getting warmed up!"
    document.querySelector('h2').innerText = 'Getting warmed up!'
}

const randColorRGB = () => {
    const red = Math.floor(Math.random() * 256) // will give us a random number from 0 to 256
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    // return 'rgb('+red+','+green+','+blue+')'
    return `rgb(${red},${green},${blue})`
}



const generateQuilt = (numOfSquares) => {
    for (let i=1; i<numOfSquares+1; i++){
        //create a square
        const square = document.createElement('div')
        // add the class of square
        square.className = 'square'

        //can also use.....
        // square.classList.add('square')

        //give the square a random background color
        square.style.backgroundColor = randColorRGB()

        // add the index to the text of the square
        square.innerText = i

        // add an id to the square that matches its number
        square.id = i

        //append the square to the body
        document.querySelector('body').append(square)

    }
}



document.addEventListener('DOMContentLoaded', ()=>{
        addH2()
        changeH2()
        // start building out our make-a-quilt-code
        // write a for loop that counts (via console.logs) from 1 to 1000
        generateQuilt(1000)
})
