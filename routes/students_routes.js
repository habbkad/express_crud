const express = require("express");
const {
  getAllStudents,
  createStudent,
} = require("../controllers/students_controller");

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);

module.exports = router;
