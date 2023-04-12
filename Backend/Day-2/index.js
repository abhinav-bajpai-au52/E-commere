const { response } = require('express')
const express = require('express')
const  app = express()

app.get('/', (request, response) => {
    console.log("homepage loaded")
    // response.send("Hello World")
})

app.listen(8003, () => {
    console.log("Server started successfully")
})