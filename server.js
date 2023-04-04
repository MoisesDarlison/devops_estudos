require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Temos um acesso");
    return res.status(200).send(`Hello TESTE!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Temos uma Att 3...`);
    console.log(`Server listening on port ${port}`);
});
