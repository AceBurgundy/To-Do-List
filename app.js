//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))

//use ejs templating engine
app.set("view engine", "ejs")

const list = []

app.get("/", (request, response) => {
    response.render("list", { list: list, listAmmount: list.length })
})

app.post("/", (request, response) => {
    const todo = request.body.todo
    list.push(todo)
    response.redirect("/")
})

app.post("/clear", (request, response) => {
    list.length = 0
    response.redirect("/")
})

app.post("/remove", (request, response) => {
    list.splice(request.body.remove, 1)
    response.redirect("/")
})

app.listen(3000, () => {
    console.log("\nStarted\n");
})