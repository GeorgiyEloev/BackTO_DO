const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  if (
    req.body.hasOwnProperty("name") &&
    req.body.hasOwnProperty("text") &&
    req.body.hasOwnProperty("isCheck")
  ) {
    const task = new Task(req.body);
    task.save().then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Неверные параметры!");
  }
};

module.exports.changeTaskInfo = (req, res) => {
  const body = req.body;
  if (
    (body.hasOwnProperty("_id") && body.hasOwnProperty("name")) ||
    body.hasOwnProperty("text") ||
    body.hasOwnProperty("isCheck")
  ) {
    Task.updateOne({ _id: body._id }, body).then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Неверные параметры!");
  }
};

module.exports.deleteTask = (req, res) => {
  const id = req.query._id;
  if (id) {
    Task.deleteOne({ _id: id }).then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Неверные параметры!");
  }
};

module.exports.deleteAllTask = (req, res) => {
  Task.deleteMany().then((result) => {
    res.send({ data: result });
  });
};
