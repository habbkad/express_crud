const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//database
const db = [];

//student model
class StudentsModel {
  constructor(name, age, gen) {
    this.name = name;
    this.age = age;
    this.gen = gen;
  }

  save() {
    db.push(this);
    return this;
  }

  static getAll() {
    return db;
  }
}

//controllers

//get all students
const getAllStudents = (req, res) => {
  const getStudents = StudentsModel.getAll();

  res.send({ message: "sucessful", data: getStudents });
};

//create new students
const createStudent = (req, res) => {
  const { name, age, gen } = req.body;

  const newStudent = new StudentsModel(name, age, gen);
  newStudent.save();
  res.send({ massage: "added sucessfully", student: newStudent });
};

//middle-wares
app.use(bodyParser.json());

//endpoints or paths
app.get("/", getAllStudents);
app.post("/", createStudent);

app.listen(5001, () => {
  console.log("server running on port 5001");
});
