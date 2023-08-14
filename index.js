const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hallo world')
})

app.get('/home', (req, res) => {
    res.send('Ini halaman Home')
})

app.get('/about', (req, res) => {
    res.send('Ini halaman About')
})

app.use((req, res, next)=> {
    res.status(404).send('halaman tidak ditemukan')
})

app.get('/', (req, res) => {
    fhuhsuihfj
})

app.use((error, req, res, next) => {
    app.status(500).send(error)
})

app.listen(port, (req, res) => {
    console.log(`server running at http://Localhost:${port}`);
})