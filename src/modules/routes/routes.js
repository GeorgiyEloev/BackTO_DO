const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getOneTask,
  createNewTask,
  changeTaskInfo,
  deleteTask,
  deleteAllTask,
} = require("../conrtollers/task.controller");

router.get("/allTasks", getAllTasks);
router.get("/oneTask", getOneTask);
router.post("/createTask", createNewTask);
router.patch("/updateTask", changeTaskInfo);
router.delete("/deleteTask", deleteTask);
router.delete("/delAllTasks", deleteAllTask);

module.exports = router;
