const cors = require('cors')
const path = require('path')
const express = require('express')
const data = require('./students')
const app = express()
const port = 7000
const htmlPath = path.resolve(__dirname, 'views')

app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('home.html', {root:htmlPath})
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root:htmlPath})
})

app.get('/works', (req, res) => {
    res.sendFile('works.html', {root:htmlPath})
})

app.get('/gallery', (req, res) => {
    res.sendFile('gallery.html', {root:htmlPath})
})

app.get('/api', (req, res) => {
    res.json(data.students)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})