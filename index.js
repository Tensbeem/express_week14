const express = require('express') //express
const http = require('http') //node.js
const morgan = require('morgan')
const app = express()

const sever = http.createServer(app)
const PORT = process.env.PORT || 4000
app.use(morgan('dev'))
app.use(express.json())

//register route
//GET:http://localhost:4000
app.get('/',(req,res)=>{
    res.status(200).send({message:"Home Page"})
})

//GET:http://localhost:4000/user/id
app.get('/user/:id([a-d,0-3](4))',(req,res)=>{
    res.status(200).send(`ID is:`+req.params.id)
})

//GET:http://localhost:4000/user/mark
app.get('/user/:name/:id',(req,res)=>{
    res.status(200).send(`Name is:${req.params.name}, ID is:${req.params.id}`)
})

//http://localhost:4000
sever.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})