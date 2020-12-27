const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json("Welcome to code build");
});

app.listen(80, () => console.log("App started"));