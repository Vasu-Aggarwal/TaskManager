import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Task from "./Task"
import TaskForm from "./TaskForm"
import axios from "axios"
import { URL } from "../App"

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const [completedTasks, setCompletedTasks] = useState([])

    const [formData, setFormData] = useState({
            name: "",
            completed: false
        })

        const {name} = formData

        const handleInputChange = (e) => {
            const {name, value}= e.target
            setFormData({ ...formData, [name]: value })
        };

        const createTask = async (e) => {
            e.preventDefault()
            if(name === ""){
                return toast.error("Input field cannot be empty!");
            }
            try {
                await axios.post(`${URL}/api/tasks`, formData);
                toast.success("Task added successfully!!")
                setFormData({...formData, name:""});
            } catch (error) {
                toast.error(error.message);
            }
        };

        const getTasks = async () => {
            try {
                const {data} = await axios.get(`${URL}/api/tasks`)
                setTasks(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        useEffect(() => {
            getTasks();
        }, [])

        const deleteTask = async(id) => {
            try {
                await axios.delete(`${URL}/api/tasks/${id}`);
                toast.success("task deleted successfully!!");
                getTasks();
            } catch (error) {
                toast.error(error);
            }
        }
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name = {name} handleInputChange={handleInputChange} createTask = {createTask}/>
        <div className="--flex-between --pb">
            <p>
                <b>Total Tasks:</b> 0
            </p>
            <p>
                <b>Completed Tasks:</b> 0
            </p>
        </div>
        <hr/>
        {
            tasks.length === 0?(<p className="--py">No Task added. Please add a task</p>):(
                <>
                {
                    tasks.map((task, index) => {
                        return(
                            <Task key={task._id} task={task.name} index={index+1} deleteTask={deleteTask}/>
                        )
                    })
                }
                </>
            )
        }
        <Task/>
    </div>
  )
}

export default TaskList