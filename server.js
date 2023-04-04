require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello, ${process.env.NAME}!`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});