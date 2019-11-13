import React from 'react';
import './App.css';
import ContactForm from './components/contact-form'
import Message from './components/message'
import store from './store';
import {submitFormAction}  from './store/actions';
class App extends React.Component {
  
  constructor(){
    super()
    this.onSubmitHandler.bind(this);
  }

  onSubmitHandler = e => {
    const payload = e ? 'Form Completed' : 'Form Incomplete!';
    console.log(payload)
    store.dispatch(submitFormAction(payload));
  }

  render(){
    return (
      <div className="App">
        <ContactForm submitHandler = {this.onSubmitHandler}></ContactForm>
        <Message message= {store.getState().message}></Message>
      </div>
    );
  }
  
}

export default App;
