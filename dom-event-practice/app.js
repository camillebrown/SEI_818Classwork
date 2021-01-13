const showConfirmation = () => {
    //create a p element called confirmation
    const confirmation = document.createElement('p')
    //put in innertext
    confirmation.innerText = 'The button hath been smashed.'
    document.querySelector('body').appendChild(confirmation)
}

const changeClass = () => {
    //add class of black to body if it doesn't already have it
    const bodyClasses = document.querySelector('body').classList
    // console.log(bodyClasses)
    if(bodyClasses.length===0){
        bodyClasses.add('black')
    //otherwise, remove the class of black from the body
    } else {
        bodyClasses.remove('black')
    }
    //remove the event listener so it can't change again
    document.querySelector('#btn').removeEventListener('click', changeClass)
}

const createDiv = () => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('new-div')
    const body = document.querySelector('body')
    body.appendChild(newDiv)
}

const mouseover = () => {
    const div = document.querySelector('.new-div')
    div.style.background = 'yellow'
}


document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.querySelector('#btn')
    // ELEM.addEventListener(EVENT, CALLBACK)
    btn.addEventListener('click',changeClass)
    createDiv()
    const newDiv = document.querySelector('.new-div').addEventListener('mouseover', mouseover)
})


