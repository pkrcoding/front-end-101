import React,{useState} from 'react';
import './modal.css';
import stateMachine from '../machine/stateMachine';
import { useMachine } from '@xstate/react';
const Modal = ({title,saveHandle, cancelHandle})=> {
    const [current, send] = useMachine(stateMachine);
    const [val,setVal] = useState("");
    return (
            <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">{title}</p>
                        <button className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <input placeholder="Enter the job name" type="text" onChange={e => setVal(e.target.value) }></input>
                        </section>
                        <footer className="modal-card-foot">
                        <button className="button is-success" onClick={()=> saveHandle(val)}>Save changes</button>
                        <button className="button" onClick={cancelHandle}>Cancel</button>
                        </footer>
                    </div>
            </div>
    )
};

export default Modal;