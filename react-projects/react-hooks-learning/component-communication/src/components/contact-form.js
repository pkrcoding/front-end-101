import React from 'react';
import PropType from 'prop-types';
import store from './../store';
import {changeEmailAction, changeNameAction }from './../store/actions';
export default class ContactForm extends React.Component{
    
    render(){
        return(
            <form>
                <label htmlFor="email">
                    Email
                </label>
                <input name="email" type="email" onChange={()=>store.dispatch(changeEmailAction(true))} />
                <br />
                <label htmlFor="name">
                    Name
                </label>
                <input name="name" type="text" onChange={()=>store.dispatch(changeNameAction(true))} />
                <button type="button" onClick={()=>this.props.submitHandler(true)}>Submit</button>
            </form>
        )
    }
}

ContactForm.PropType ={
    submitHandler: PropType.func
}

