var express = require('express')
var app = express()
var gmcservices = require('./gmcservices')

app.use('/gmcservices', gmcservices)
const port = 8081
app.listen(port, () => console.log(`GMC Services (node) listening on port ${port}!`))