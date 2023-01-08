const express = require("express");
const { createTask, 
    getTasks, 
    getTask, 
    deleteTask, 
    updateTask 
} = require("../controllers/taskController");
const Task = require("../model/taskModel");
const router = express.Router();

// router.route("").get(getTasks).post(createTask);
// router.route(":id").get(getTask).delete(deleteTask).put(updateTask);

router.post('', createTask);    //create a new task
router.get('', getTasks);   //get all the tasks in the db
router.get(':id', getTask);     //get a single task with id
router.delete(':id', deleteTask);   //delete a task using id
router.put(':id', updateTask);  //update the task using id 

module.exports = router