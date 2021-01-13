const express = require('express')

const app = express()

app.get('/fresh-prince', (req, res)=>{
    res.send(`
        <html>
            <body>
                <h1> Do you like Fresh Prince? </h1>  
                <h3>Main Characters</h3>
                <ul>
                    <li> Will Smith </li>
                    <li> Ashley Banks </li>
                    <li> Hillary Banks </li>
                    <li> Uncle Phil </li>
                </ul>    
            </body>
        </html>    
    `)
})

app.get('/girlfriends', (req, res)=>{
    res.send(`
        <html>
            <body>
                <h1> Have you ever watched Girlfriends? </h1>  
                <h3>Main Characters</h3>
                <ul>
                    <li> Maya Wilkes </li>
                    <li> Joan Clayton </li>
                    <li> Toni Childs </li>
                    <li> Lynn White </li>
                </ul>    
            </body>
        </html>    
    `)
})


app.listen(8000, ()=>{
    console.log('this will be about TV shows')
})