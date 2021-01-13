// import the code from myModule that is being exported
const myModule = require('./myModule.js')

// console.log(myModule.beBasic())
// myModule.count()
// console.log(myModule.amal)

// myModule.experiment()

// fs (filesystem) is a built in "core" module available for us to import
const fs = require('fs')

// readFile (what to read, in what character format, two parameters for error and data to export)
fs.readFile('story.txt', 'utf8', (err, data)=> {
    if(err){
        console.log('There was a problem reading the file')
    } else {
        console.log(data)
    }
})