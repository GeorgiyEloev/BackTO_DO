const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  text: String,
  isCheck: Boolean,
});

module.exports = Task = mongoose.model("tasks", taskSchema);
