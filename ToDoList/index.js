import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const date = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
let day = date.getDay()
let month = date.getMonth()
let dayN = date.getDate()
let year = date.getFullYear()
var workList = []
var homeList = []

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/home", (req, res) => {
    res.render("home", {
        month, year, homeList,
        today: day,
        daysOfMonth: dayN,
        daysOfMonths: days,
        monthsOfYear: months,
    })
});

app.get("/work", (req, res) => {
    res.render("work", {
        month, year, workList,
        today: day,
        daysOfMonth: dayN,
        daysOfMonths: days,
        monthsOfYear: months,
    })
});

app.post("/work/add", (req, res)=>{
   const newTask = req.body.task;
   if(newTask){
       workList.push(newTask);
   }
   res.redirect("/work");
});


app.get("/work/delete/:index", (req, res) =>{
   const index = req.params.index;
   if(index >= 0 && index < workList.length){
       workList.splice(index, 1);
   }
   res.redirect("/work");
});

app.post("/home/add", (req, res)=>{
    const newTask = req.body.task;
    if(newTask){
        homeList.push(newTask);
    }
    res.redirect("/home");
});

app.get("/home/delete/:index", (req, res) => {
   const  index = req.params.index;
   if(index >= 0 && index < homeList.length){
       homeList.splice(index, 1);
   }
   res.redirect("/home")
});


app.listen(port, () => {
    console.log(`server running on ${port}` )
})