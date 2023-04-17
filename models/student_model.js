const db = require("../database/db");

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

module.exports = StudentsModel;
