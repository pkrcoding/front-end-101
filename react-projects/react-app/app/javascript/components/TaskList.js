import React from 'react';
import Task from './Task';

const TaskList = () => {
    const [currentTask, setCurrentTask] = useState({});


    const completeTask = task => {
        setCurrentTask()
    };
    return(
        <div>
            <Task completeTask= {completeTask}></Task>
        </div>
    )
}

export default TaskList;