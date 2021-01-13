const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];

const populateData = () => {
    //write a for loop that loops through the data array and console.logs each piece of data
    for(let i=0; i<data.length;i++){
        // console.log(data[i])
    //create a div for each piece of data
    const infoContainer = document.createElement('div')
    //add a class of "info-container" to each div
    infoContainer.classList.add('info-container')
    //create a new div called nameDiv
    const nameDiv = document.createElement('div')
    //give nameDiv a class of 'name'
    nameDiv.classList.add('name')
    //give it some inner text of the name of whatever data object this for loop is currently using
    nameDiv.innerText = data[i].name
    //create a new div called addressDiv
    const addressDiv = document.createElement('div')
    //give addressDiv a class of 'address'
    addressDiv.classList.add('address')
    //give it some inner text of the address of whatever data object this for loop is currently using
    addressDiv.innerText = data[i].address
    //add the nameDiv and addressDiv to the infoContainer
    //append one element to another: PARENT.appendChild(CHILD)
    infoContainer.appendChild(nameDiv)
    infoContainer.appendChild(addressDiv)
    document.querySelector('body').appendChild(infoContainer)
    }
}

const addData = (name, address) => {
    //add this person to the data array
    // data.push({name:name, address:address}) SAME AS BELOW
    data.push({name, address}) // <-- new cool way (es6)
    //remove current data from the page
    const body = document.querySelector('body')
    // loop through all of the children of the body
    while(body.firstChild){
        body.removeChild(body.firstChild)
    }
    //repopulate my page to show updated data
    populateData()
}

const removeData = (name) => {
    //remove the person from the data array
    //find the index of the person we're trying to remove
    const index = data.findIndex((entry)=>{
        return entry.name === name
    })
    // console.log('DATA[INDEX] FROM REMOVE FUNCTION', data[index])
    if(index>-1){
        //remove 1 element at data[index]
        data.splice(index, 1)
    }
    const body = document.querySelector('body')
    while(body.firstChild){
        body.removeChild(body.firstChild)
    }
    //refreshes the rolodex
    populateData()

}

document.addEventListener('DOMContentLoaded', ()=>{
    populateData();
    addData('Camille','Los Angeles')
    removeData('Some guy')
})


