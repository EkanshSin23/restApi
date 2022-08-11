const { request } = require('express');
const express = require('express');
const path = require('path')
const hbs = require('hbs')
const Student = require("./models/model")
require("./db/conn")

const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", template_path)
hbs.registerPartials(partials_path)



app.get("/", (req, res) => {
    res.render('login')
})
app.post("/login", async (req, res) => {
    try {
        const result = new Student({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
            number: req.body.number,
        })
        const data = await result.save();
        res.send("hello")
    } catch (error) {
        console.log(error);
    }
})
app.listen(port, () => {
    console.log("Server Connection Succesfull");
})