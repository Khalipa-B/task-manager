const Task = require("./task");
const express = require("express");
const router = express.Router();

//Create new task
router.post("/tasks", async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    console.error("Error saving task:", error);
    res.status(400).send(error);
  }
});

//Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get a task by ID
router.get('/tasks/:id', async (req, res) => {
  try {
    console.log("Getting task with ID:", req.params.id);  
    const task = await Task.findById(req.params.id);
    if (!task) {
      console.log("Task not found");
      return res.status(404).send({ error: "Task not found" });
    }
    res.send(task);
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    res.status(500).send(error);
  }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Delete a task
router.delete ('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete (
      (req.params.id));
    if (!task) return res.status(404).send();
    res.send(task);
  }catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
