const requestUrl = "https://randomuser.me/api/?results="
const peopleList = document.querySelector('#peopleList')

const addPerson = (person) => {
    //create a new li
    let li = document.createElement("li")
    //add the first and last name of the person to the li
    li.innerText = `${person.name.first} ${person.name.last}  `
    //add a picture
    let pic = document.createElement("img")
    pic.setAttribute("src", person.picture.thumbnail)
    li.appendChild(pic)
    //append the li to the ul
    peopleList.appendChild(li)
}

const fetchPeople = () => {
    fetch(requestUrl+input.value)
    .then ((responseData)=>{
        return responseData.json()
    })
    .then((jsonData)=>{
        console.log("jsonData.results:", jsonData.results)
        // add a li to the ul for each person in the jsonData
        let people = jsonData.results
        people.forEach(addPerson)
    })
    .catch((err)=>{
        console.log("SOS THERE IS AN ERROR:", err)
    })
}

document.addEventListener("DOMContentLoaded",() => {
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        // console.log("user input is:", input.value)
        while (peopleList.firstChild) {
            peopleList.removeChild(peopleList.firstChild)
        }
        fetchPeople()
    })
})
