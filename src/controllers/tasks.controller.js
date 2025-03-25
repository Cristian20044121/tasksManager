import tasksModel from "../models/tasks.model.js";

const getTasks = async (req, res) => {
  try {
    const tasks = await tasksModel
      .find({
        user: req.user.id,
      })
      .populate("user");
    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
  }
};
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasksModel
      .findById(id, {
        user: req.user.id,
      })
      .populate("user");
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
};
const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new tasksModel({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTask.save();
    return res.status(201).json(savedTask);
  } catch (error) {
    console.log(error);
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTask = await tasksModel
      .findByIdAndUpdate(
        id,
        req.body,
        {
          user: req.user.id,
        },
        {
          new: true,
        }
      )
      .populate("user");
    return res.status(201).json(updateTask);
  } catch (error) {
    console.log(error);
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await tasksModel
      .findByIdAndDelete(id, {
        user: req.user.id,
      })
      .populate("user");
    return res.status(204);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
