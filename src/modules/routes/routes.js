const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask,
  deleteAllTask,
} = require("../conrtollers/task.controller");

router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.patch("/updateTask", changeTaskInfo);
router.delete("/deleteTask", deleteTask);
router.delete("/delAllTasks", deleteAllTask);

module.exports = router;
