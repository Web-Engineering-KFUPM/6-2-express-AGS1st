import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();

{/*write code for cors*/}
app.use(cors());

{/*write code to define routes*/}
app.get("/quote", (req, res) => {
    const quote = getRandomQuote();
    res.json({quote});
});


{/*write code to create server*/}
app.listen(3000, () => {
    console.log("running");
});