//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.get("/", (request, response) => {
    response.send("Hello")
})

app.listen(3000, () => {
    console.log("\nStarted\n");
})