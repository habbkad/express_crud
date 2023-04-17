const StudentsModel = require("../models/student_model");

//controllers

//get all students
exports.getAllStudents = (req, res) => {
  const getStudents = StudentsModel.getAll();

  res.send({ message: "sucessful", data: getStudents });
};

//create new students
exports.createStudent = (req, res) => {
  const { name, age, gen } = req.body;

  const newStudent = new StudentsModel(name, age, gen);
  newStudent.save();
  res.send({ massage: "added sucessfully", student: newStudent });
};
