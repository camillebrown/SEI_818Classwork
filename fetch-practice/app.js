console.log('suppppp')
const requestUrl = "https://www.reddit.com/search.json?q=kittens"

// fetch is built in to javascript to allow us to AJAX requests

//this will give us the fetch object back
fetch(requestUrl)
//then promise takes a callback
.then((responseData)=>{
    // Fetch will package the response into an object with some methods that allow us to do some useful things with the response data
    console.log("responseData:", responseData)
    // use responseData.json() to get the data passed into the next promise in JSON format
    return responseData.json()
})
.then((jsonData)=>{
    //whatever we returned in the first .then promise will be passed in as an argument of THIS callback
    // now we have the data in json format and we can do whatever we need to with it
    console.log("jsonData:", jsonData)
    console.log("Just fired an AJAX request using fetch!")
})
// catch callback receives any errors that are thrown
.catch((error)=>{
    // any errors encountered in the request or the promises above will be passed as an argument into this catch callback
    console.log("oh no, there's been an error!", error)
})