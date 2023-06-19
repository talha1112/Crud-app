const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
  name: String,
  desig:  String
})

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel;
