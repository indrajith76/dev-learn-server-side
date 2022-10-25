const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");
const courseCategory = require("./data/courseCategory.json");
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to DEV LEARN server!");
});

app.get("/categories", (req, res) => {
  res.send(courseCategory);
});

app.get("/categories/:categoryId", (req, res) => {
  const id = req.params.categoryId;
  const course = courses.filter((course) => course.categroyId === id);
  res.send(course);
});

app.get("/courses/:courseId", (req, res) => {
  const id = parseInt(req.params.courseId);
  const singleCourse = courses.find((course) => course.id === id);
  res.send(singleCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
