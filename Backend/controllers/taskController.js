const Task = require("../model/taskModel");

//Create a task DB
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.json(task);
    } catch (error) {
        res.send("Error");
    }
};

//Get all tasks from DB
const getTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (error) {
        res.send("Error");
    }
};

//Get single task from DB
const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json("No task with id: ", id);
        }
        res.json(task);
    } catch (error) {
        res.send("Error");
    }
};

//Delete the task
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json("No task with id: ", id);
        }
        res.send("Task deleted");
    } catch (error) {
        res.send("Error");
    }
};

//Update a task
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate({_id: id}, req.body, {new: true}
        );
        if(!task){
            return res.status(404).json("No task with id: ", id);
        }
        res.json(task);
    } catch (error) {
        res.send("Error");
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}