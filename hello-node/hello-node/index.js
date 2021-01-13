var http = require('http')

//create a server object:
http.createServer((req, res) => {
    res.write('Goodbye World!') //write a response to the client
    res.end() //end the response
}).listen(8000) //the server object listens on port 8000

let i = 0

count = () => {
    console.log(i)
    i--
}

const myTimer = setInterval(count, 1000)

