const express = require('express')
const app = express()
const port = 8080

app.use(express.static('webpage'))
app.use('/static', express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname+"webpage/index.html")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))