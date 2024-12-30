const express = require('express')
const app = express();

app.get('/login', (req, res) => {
    res.send('Login page')
})

app.get('/about', (req, res)=> {
    res.send('About page')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})