import React from 'react';
import './job.css';
const Job = ({job, selectJob}) => {
    return(
        <div>
            <button className="button is-medium job-btn" onClick={selectJob} >{job.name}</button>
        </div>
    )
};
export default Job;