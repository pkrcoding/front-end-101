import React from 'react';
import './task.css';

const Task = ({task, completeTask}) => {
    const handleAddComment = e => {

    }
    return(
        <div className="task-block">
            <div>
                <div>
                {task.guidance}
                </div>
                <div>
                {
                  task.comments.map( comment => {
                      comment.datetime.toString() + " " + comment.text
                  })
                }
                </div>
            </div>
            <div>
                <div>
                    <button type="button" onClick={e => handleAddComment(e)}>Add Comment</button>
                </div>
                <div>
                    <button type="button" onClick={e => completeTask(task)}>Complete Work Item</button>
                </div>
            </div>
        </div>
    )
}

export default Task;