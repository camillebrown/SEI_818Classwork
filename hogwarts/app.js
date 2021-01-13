// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

let container = document.getElementById('container')
// console.log(container)

let h1 = document.createElement('h1')
// console.log(h1)

h1.innerText = 'Hogwarts'

container.appendChild(h1)

let h2 = document.createElement('h2')
h2.innerText = "Camille Brown"

let h3 = document.createElement('h3')
h3.innerText = "Gryffindor"

let h4 = document.createElement('h4')
h4.innerText = "Pet Name: Daisy"

h4.className = "owl"
// console.log(h4)

let wand = document.createElement('h4')
wand.innerText = "Birch Wand with Phoenix Feather Core"

container.appendChild(h2)
container.appendChild(h3)
container.appendChild(h4)
container.appendChild(wand)

let ul = document.createElement('ul')
ul.setAttribute('storage','trunk')
// console.log(ul)
container.appendChild(ul)

let listItems = ['butter beer', 'invisibility cloak', 'magic map', 'time turner', 'leash', 'Bertie Bott\'s Every Flavor [Jelly] Beans']

function addElements() {
    for (let i=0; i<listItems.length; i++){
        var li = document.createElement('li');
        li.innerText = listItems[i];
        if (listItems[i] === "invisibility cloak" || listItems[i] === "magic map" || listItems[i] === "time turner"){
            li.className = 'secret';
        } else if (listItems[i] === "leash") {
            li.className = "owl"
        }
        ul.appendChild(li)
    }
}

addElements();

let h5 = document.createElement('h5')
h5.innerText = 'Spring 2017'
container.appendChild(h5)

let table = document.createElement('table')
container.appendChild(table)

let thead = document.createElement('thead')
table.appendChild(thead)

let th1 = document.createElement('th')
th1.innerText = 'Day'
thead.appendChild(th1)

let th2 = document.createElement('th')
th2.innerText = 'Classes'
thead.appendChild(th2)

//////////////////////////////////////

let tr1 = document.createElement('tr')
table.appendChild(tr1)

let td1 = document.createElement('td')
td1.innerText = 'Monday'
tr1.appendChild(td1)

let td2 = document.createElement('td')
td2.innerText = 'Herbology & History of Magic'
tr1.appendChild(td2)

//////////////////////////////////////

let tr2 = document.createElement('tr')
table.appendChild(tr2)

let td3 = document.createElement('td')
td3.innerText = 'Tuesday'
tr2.appendChild(td3)

let td4 = document.createElement('td')
td4.innerText = 'Quidditch practice & Transfiguration'
tr2.appendChild(td4)

//////////////////////////////////////

let tr3 = document.createElement('tr')
table.appendChild(tr3)

let td5 = document.createElement('td')
td5.innerText = 'Wednesday'
tr3.appendChild(td5)

let td6 = document.createElement('td')
td6.innerText = 'Herbology & History of Magic'
tr3.appendChild(td6)

//////////////////////////////////////

let tr4 = document.createElement('tr')
table.appendChild(tr4)

let td7 = document.createElement('td')
td7.innerText = 'Thursday'
tr4.appendChild(td7)

let td8 = document.createElement('td')
td8.innerText = 'Quidditch practice & Transfiguration'
tr4.appendChild(td8)

//////////////////////////////////////

let tr5 = document.createElement('tr')
table.appendChild(tr5)

let td9 = document.createElement('td')
td9.innerText = 'Friday'
tr5.appendChild(td9)

let td10 = document.createElement('td')
td10.innerText = 'Defense Against the Dark Arts & Potions'
tr5.appendChild(td10)


// let tds = ['Monday', 'Herbology & History of Magic', 'Tuesday', 'Quidditch practice & Transfiguration', 'Wednesday', 'Herbology & History of Magic', 'Thursday', 'Quidditch practice & Transfiguration', 'Friday','Defense Against the Dark Arts & Potions']
// let trs = [1,2,3,4,5]
// let tableRows = () => {
//     for(let i=0; i<trs.length; i++){
//         var tr = document.createElement('tr')
//         tr.innerText = 'tr' + trs[i]
//         table.appendChild(tr)
//     }
//     for(let i=0; i<tds.length;i++) {
//         var td = document.createElement('td');
//         td.innerText = tds[i];
//         tr.appendChild(td)
//     }
// }

// tableRows();

wand.remove()

document.querySelector('li').remove()

wand.innerText = 'New Wand'
container.insertBefore(wand, ul)

// wand.style.color = 'indigo'

h4.remove()
container.appendChild(h4)

h4.remove()

// parentelement.insertBefore(element to be inserted, element to be inserted before)
container.insertBefore(h4, wand)

let hide = document.querySelectorAll('li.secret')

hide[0].remove()
hide[1].remove()
hide[2].remove()

setTimeout(function(){
    ul.appendChild(hide[0])
    ul.appendChild(hide[1])
    ul.appendChild(hide[2])
},2000)



let leash = document.querySelector('li.owl')
// console.log(leash.classList)

leash.classList.add('cabbage')
// console.log(leash.classList)

leash.classList.remove('cabbage')
// console.log(leash.classList)

h5.innerText = "Fall 2018"

let li5 = document.createElement('li')
li5.innerText = 'Butter beer'
ul.prepend(li5)

ul.setAttribute('storage','chest')






