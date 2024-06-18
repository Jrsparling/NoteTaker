const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
  );

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    fs.readFile('./dp/dp.json', 'utf8', (err, data) => 
        notes = JSON.parse(data),
    res.json(notes))});

app.post('/api/notes', (req, res) => {
    res.json({
        term: '',
    });
});
// fs.writefile('')

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);