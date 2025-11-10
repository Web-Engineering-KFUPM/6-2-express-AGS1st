import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();
const port = 3000;

{/*write code for cors*/}
app.use(cors());

{/*write code to define routes*/}
app.get("/", (req, res) => {
    const quote = getRandomQuote();
    res.send("Welcome to the Quote Generator API");
});

app,get("/api/quote", (req, res) => {
    const q = getRandomQuote();
    res.json({quote: q});
})

{/*write code to create server*/}
app.listen(port, () => {
    console.log("Server running on http://localhost:${PORT}");
});