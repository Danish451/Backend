require('dotenv').config()

const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res)=> {
    res.send("hello world!")
})
app.get('/twitter', (req, res) => {
    res.send("danish is the best")
})

app.get('/login', (req, res)=> {
    res.send('<h1>Please login to chai aur code </h1>')
})
// app.listen(port, ()=>{
//     console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})
