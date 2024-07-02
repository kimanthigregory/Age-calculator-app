import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    date: null,
    month: null,
    year: null,
  });
});

app.post("/input", (req, res) => {
  const usersDate = parseInt(req.body.date);
  const usersMonth = parseInt(req.body.month) - 1;
  const usersYear = parseInt(req.body.year);
  const ageCalculator = function (year, month, date) {
    const createDate = new Date(year, month, date);
    const today = new Date();

    let dateOfBirth = today.getDate() - createDate.getDate();
    let monthOfBirth = today.getMonth() - createDate.getMonth();
    let yearOfBirth = today.getFullYear() - createDate.getFullYear();
    if (
      monthOfBirth < 0 ||
      (usersMonth === createDate.getMonth() && dateOfBirth < 0)
    ) {
      yearOfBirth -= 1;
      monthOfBirth += 12;
    }
    if (dateOfBirth < 0) {
      dateOfBirth += new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      monthOfBirth -= 1;
    }

    return { dateOfBirth, monthOfBirth, yearOfBirth };
  };
  console.log(ageCalculator(usersYear, usersMonth, usersDate));
  let { dateOfBirth, monthOfBirth, yearOfBirth } = ageCalculator(
    usersYear,
    usersMonth,
    usersDate
  );

  res.render("index.ejs", {
    date: Math.abs(dateOfBirth),
    month: Math.abs(monthOfBirth),
    year: Math.abs(yearOfBirth),
  });
  // function isLeapYear(year){
  //     return (year % 4 === 0 && year %100 !==0 || year % 400 === 0);
  // }
  // console.log(isLeapYear(usersYear));
  // function checkLeapYear(startYear,endYear){
  //     const leapYears = [];
  // }+
});
app.listen(port, () => {
  console.log(`server runing  on port ${port}`);
});
