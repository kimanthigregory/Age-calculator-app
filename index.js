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
})
app.listen(port,() =>{
    console.log(`server runing  on port ${port}`);
})