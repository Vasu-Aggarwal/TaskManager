
import {FaEdit, FaCheckDouble, FaRegTrashAlt} from "react-icons/fa"
const Task = ({task, index, deleteTask, key}) => {
  return (
    <div className="task">
        <p>
            <b>{index}.</b>
            {task}
        </p>
        <div className="task-icons">
            <FaCheckDouble color="green"/>
            <FaEdit color="purple"/>
            <FaRegTrashAlt color="red" onClick={() => deleteTask(key)}/>
        </div>
    </div>
  )
}

export default Task