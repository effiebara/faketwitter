const express = require('express')
const mongoose = require('mongoose')
var bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 3000

const db_uri=""

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})