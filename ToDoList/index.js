import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const  task = {
    work: [],
    home: [],
};

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/home", (req, res) => {
    res.render("home")
});

app.get("/work", (req, res) => {
    res.render("work")
});

app.post()

app.listen(port, () => {
    console.log(`server running on ${port}` )
})