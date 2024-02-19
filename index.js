import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/" , (req,res)=>{
    res.render("index.ejs");
})

app.post("/input",(req,res)=>{
    const usersDate = req.body.date;
    const usersMonth = req.body.month;
    const usersYear = req.body.year;
    res.redirect("/");
    function isLeapYear(year){
        return (year % 4 === 0 && year %100 !==0 || year % 400 === 0);
    }
    console.log(isLeapYear(usersYear));
    function checkLeapYear(startYear,endYear){
        const leapYears = [];
    }
})
app.listen(port,() =>{
    console.log(`server runing  on port ${port}`);
})