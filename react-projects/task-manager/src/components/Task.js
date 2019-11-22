import React, {useRef} from 'react';

import './task.css';
const Task = ({task}) => {
     const txtArea = useRef("");

    if(task.comments){
        let cms="";
        cms = task.comments.map(c =>(cms + c.text +"\n"));
        txtArea.current.value = cms;
    }

    let border ="todo-task"
    if(task.status==='In progress'){
        border= "inprogress-task"
    } else if (task.status==='Completed'){
        border = "completed-task"
    }

    return( 
    <div className={"box tile" + border}>
        <div className="columns">
            <div className="column is-4">{task.guidance}</div>
            <div className="column is-6">
                <textarea ref={txtArea} key={"ta" + task.id} className="textarea" disabled ></textarea>
            </div>
            <div className="column is-2">
                <div className="row"><button type="button" className="button" disabled= {task.status==='Todo'}>Add Comment</button></div>
                <div className="row"><button type="button" className="button" disabled= {task.status!=='In progress'}>Complete Task</button></div>
            </div>
        </div>
        
    </div>
)};
export default Task;