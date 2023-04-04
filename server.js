
import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";

const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    console.log("Init request hehe");
    return res.status(200).json({ Message: "Success!" })
})
const { PORT = 3333 } = process.env
app.listen(PORT, () => console.log("Listen on port:", PORT, "\n", new Date()))