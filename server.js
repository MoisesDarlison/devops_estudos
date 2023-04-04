require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Temos um acesso");
    res.status(200).send(`Hello TESTE!`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Temos uma Att...`);
    console.log(`Server listening on port ${port}`);
});
