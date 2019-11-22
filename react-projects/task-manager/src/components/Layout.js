import React from 'react';
import TaskList from './TaskList';
import './layout.css';
import JobList from './JobList';
import Modal from './Modal';
import { useMachine } from '@xstate/react';
import stateMachine from '../machine/stateMachine';
const Recipies = () => {
    const [current,send] = useMachine(stateMachine);

    
    const selectRecipie = e => {
        send('RECIPIE_SELECTED', {data: e.target.value});
    }
    return (
        
    <div className="container">
        <nav className="navbar is-black">
        </nav>
        <div className="columns p-20">
            <div>
                <div>
                    <div>Recipie Selection</div> 
                    <select className="select" onChange={selectRecipie} >
                        {
                            current.context.layout_recipieList? <option key="default" >Please select the task</option>:""
                        }
                        {
                            current.context.layout_recipieList?  current.context.layout_recipieList.map(r => <option key={r.id}  value={r.id}>{r.name}</option>) : ""
                        }
                    </select>&nbsp;&nbsp;&nbsp;
                    <button className="button is-small" onClick={()=> send('SHOW_JOB_MODAL',{data:true})}>Add Job</button>
                </div>
                <JobList jobs = {current.context.layout_jobList}></JobList>
                {
                    current.context.layout_showAddJobModal?
                        <Modal showModalHandle={(v)=>{}}
                        title="Enter Jobname and save to add it" 
                        saveHandle={ ()=>send('ADD_JOB_NAME')} 
                        cancelHandle= {()=>send('SHOW_JOB_MODAL', {data: false})}
                        ></Modal>
                        :
                        ""
                }   
               
                
            </div>
            <div className="column is-10">
                 <TaskList tasks = {current.context.layout_taskList}></TaskList>
            </div> 
        </div>
        
    </div>);
};

export default Recipies;