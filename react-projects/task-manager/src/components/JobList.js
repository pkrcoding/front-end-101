import React from 'react';
import Job from './Job';
import stateMachine from '../machine/stateMachine';
import { useMachine } from '@xstate/react';
const JobList = ({jobs}) => {
    const [current,send] = useMachine(stateMachine);

    return(
        <aside className="menu">
            {
               jobs? jobs.map(j=><Job selectJob={()=>send('SET_JOB',{data:j.id})} key={j.id} job={j}></Job>):""
            }
        </aside>

    )
};
export default JobList;