const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 4000
const server = http.createServer(app)

//Body-parser middleware
app.use(bodyParser.urlencoded({extends:fales}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Home")
})


Server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

