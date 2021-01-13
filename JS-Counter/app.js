
addBtn = document.querySelector('.add')
subBtn = document.querySelector('.subtract')
textInput = document.querySelector('#num')
headerNumber = document.querySelector('h1').innerText
heading = document.querySelector('h1')
let newTotal = parseInt(headerNumber)

const add = () => {
    let num = parseInt(textInput.value)
    document.querySelector('h1').innerText = newTotal += num
    if(newTotal>0){
        heading.classList.remove('negative')
    }
}

const subtract = () =>{
    let num = parseInt(textInput.value)
    document.querySelector('h1').innerText = newTotal -= num
    if(newTotal<0){
        heading.classList.add('negative')
    }
}




addBtn.addEventListener('click',add)
subBtn.addEventListener('click',subtract)