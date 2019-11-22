import React from 'react';
import Task from './Task';
import './taskList.css';
const TaskList = ({tasks}) => (
        <div>
        {
            tasks.map(t => <Task key={t.id} task={t}></Task>)
        }
        </div>
    );
export default TaskList;