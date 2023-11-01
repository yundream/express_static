const express = require('express')
const logger = require('./logger')
const app = express()
const port = 8080


app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/webpage/index.html")
    logger.info({user_id: 'yundream', transaction_id: '1234567'}, "Homepage loaded")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))