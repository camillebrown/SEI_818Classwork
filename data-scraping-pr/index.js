const request = require('request')
const cheerio = require('cheerio')
const URL = 'https://visitseattle.org/partners/?frm=partners&ptype=visitors-guide&s=&neighborhood=Capitol+Hill'

// request takes two params: URL and response
request(URL, (err, response, body)=>{ // body = response.data
    let $ = cheerio.load(body) // cheerio.load takes the HTML string as the argument
    console.log($)
})