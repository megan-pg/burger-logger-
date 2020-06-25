const express = require('express')
const app = express();
const handlebars = require("express-handlebars");

// We will be using the npm package "dotenv" to allow us to use our database credentials but prevent them from beeing pushed to github.  

require('dotenv').config()

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require('./routes')


app.use('/', routes)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

